<template>
  <div>
    <TotalBalance class="mb-2" />

    <ToolbarByMonth class="mt-5 mb-2" format="MM-YYYY" @month="changeMonth" :color="toolbarColor"
      :month="$route.query.month" />

    <v-card>
      <v-card-text class="text-sm-center" v-if="mappedRecordsLength === 0">
        <v-icon size="100" color="grey"> assignment </v-icon>
        <p class="font-weight-light subheading grey--text">
          Nenhum lançamento no período
        </p>
      </v-card-text>

      <v-list two-line subheader v-else>
        <template v-for="(records, date, index) in mappedRecords">
          <v-subheader :key="date">
            {{ date }}
          </v-subheader>
          <RecordsListItem v-for="record in records" :key="record.id" :record="record" />
          <v-divider :key="`${date}-${index}`" v-if="showDivider(index, mappedRecords)" />
        </template>
      </v-list>

      <v-footer class="pa-2">
        <v-flex class="text-sm-right">
          <h3 class="font-weight-light">
            <span>Saldo do mês:</span>
            <strong :class="amountColor(totalAmount)" class="ml-5">
              {{ formatCurrency(totalAmount) }}
            </strong>
          </h3>
        </v-flex>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import { Subject } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { groupBy } from '@/utils'
import amountColorMixin from './../mixins/amount-color'
import formatCurrencyMixin from '@/mixins/format-currency'
import RecordsListItem from './RecordsListItem.vue'
import RecordsService from './../services/records-service'
import ToolbarByMonth from './ToolbarByMonth.vue'
import TotalBalance from './TotalBalance.vue'

export default {
  name: 'RecordsList',
  components: {
    RecordsListItem,
    ToolbarByMonth,
    TotalBalance
  },
  mixins: [amountColorMixin, formatCurrencyMixin],
  data: () => ({
    records: [],
    monthSubject$: new Subject()
  }),
  computed: {
    mappedRecords () {
      return groupBy(this.records, 'date', (record, dateKey) => {
        return moment(record[dateKey].substr(0, 10)).format('DD/MM/YYYY')
      })
    },
    mappedRecordsLength () {
      return Object.keys(this.mappedRecords).length
    },
    totalAmount () {
      return this.records.reduce((sum, record) => sum + record.amount, 0)
    },
    toolbarColor () {
      return this.totalAmount < 0 ? 'error' : 'primary'
    }
  },
  created () {
    this.setRecords()
  },
  methods: {
    changeMonth (month) {
      this.$router
        .push({
          path: this.$route.path,
          query: { month }
        })
        .catch((err) => err)
      this.monthSubject$.next({ month })
    },
    setRecords () {
      console.log('Suscribing...')

      this.monthSubject$
        .pipe(
          mergeMap(variables => RecordsService.records(variables))
        ).subscribe(records => (this.records = records))
    },
    showDivider (index, object) {
      return index < Object.keys(object).length - 1
    }
  }
}
</script>
