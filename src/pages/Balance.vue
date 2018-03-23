<template>
  <div>
    <top></top>
    <section class="section">
      <div class="container">
        <b-table
          :data="data"
          paginated
          per-page="5"
          :opened-detailed="defaultOpenedDetails"
          detailed
          narrowed
          detail-key="coin"
        >

          <template slot-scope="props">

            <b-table-column field="coin" label="Coin" sortable>
              {{ props.row.coin }}
            </b-table-column>

            <b-table-column field="name" label="Name" sortable>
              {{ props.row.name }}
            </b-table-column>

            <b-table-column field="balance" label="Balance" sortable centered>
              {{ props.row.balance }}
            </b-table-column>

            <b-table-column field="inOrder" label="In Order" sortable centered>
              {{ props.row.inOrder }}
            </b-table-column>
          </template>

          <template slot="detail" slot-scope="props">
            <a class="button" href="/deposit">Deposit</a>
            <a class="button" href="/withdraw">Withdraw</a>
          </template>
        </b-table>
      </div>
    </section>
    <bottom></bottom>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Bottom from '@/components/Bottom.vue'

const data = [
  {'coin': 'ETH', 'name': 'Ethereum', 'balance': 123, 'inOrder': 1},
  {'coin': 'BABA', 'name': 'Alibaba Group Holding Ltd', 'balance': 321, 'inOrder': 0}
]

export default {
  components: {
    Top,
    Bottom
  },
  data () {
    return {
      data,
      defaultOpenedDetails: ['ETH']
    }
  },
  mounted () {
    if (!this.$auth.isAuthenticated()) {
      this.router.push('/login')
    }
  }
}
</script>
