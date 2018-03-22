<template>
  <div>
    <top></top>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <img src="~@/assets/eth.png" style="height: 18px;
    vertical-align: sub;"/>
            <strong>ETH</strong>
            <span> - Ethereum</span>
            <br/>
            <div class="columns">
              <div class="column is-half">
                <p>Total Balance</p>
                <p>In Order</p>
                <p>Available Balance</p>
              </div>
              <div class="column is-half">
                <p>{{ balance }}</p>
                <p>{{ inOrder }}</p>
                <p>{{ availableBalance }}</p>
              </div>
            </div>

            <b-message type="is-danger">
              <p>Minimum withdrawal: 0.02 ETH.</p>
              <p>Do not withdrawal directly to a crowdfund or ICO. We will not credit your account with tokens from that sale.</p>
            </b-message>
            <template>
              <section>
                <b-field label="ETH Withdrawal Address">
                  <b-input maxlength="42"></b-input>
                </b-field>

                <b-field label="Amount">
                  <b-input type="number">
                  </b-input>
                </b-field>
                <b-field>
                  <span class="button is-success">Submit</span>
                </b-field>
                <b-message type="is-info">
                  Once you have submitted your withdrawal request, we will send a confirmation email. Please then click on the confirmation link in your email.
                </b-message>
              </section>
            </template>
          </div>
          <div class="column is-half">
            <b>Transaction history:</b>

            <b-table
              :data="data"
              :paginated="isPaginated"
              :per-page="perPage"
              :current-page.sync="currentPage"
              :pagination-simple="isPaginationSimple"
              :default-sort-direction="defaultSortDirection"
              default-sort="date">

              <template slot-scope="props">

                <b-table-column field="user.amount" label="Amount" centered sortable width="40">
                  {{ props.row.amount }}
                </b-table-column>

                <b-table-column field="user.tx_id" label="Transaction" width="40" centered sortable>
                  <a :href="'https://etherscan.io/tx/' + props.row.tx_id " target="_blank"> {{ props.row.tx_id.slice(0, 15) }}</a>
                </b-table-column>

                <b-table-column field="date" label="Date" sortable centered width="40">
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Status" centered width="20">
                  {{props.row.status === true ? '✅' : '🤷'}}
                </b-table-column>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

const data = [
  {'amount': '2', 'tx_id': '0x6e88a1e7da6c2ccbe7dcbcd7a3e9711c85aef446fc20ce4870a697fa6da7005d', 'date': '2016-10-15 13:43:27', 'status': true},
  {'amount': '3', 'tx_id': '0x6e88a1e7da6c2ccbe7dcbcd7a3e9711c85aef446fc20ce4870a697fa6da7005d', 'date': '2016-12-15 06:00:53', 'status': true},
  {'amount': '45', 'tx_id': '0x6e88a1e7da6c2ccbe7dcbcd7a3e9711c85aef446fc20ce4870a697fa6da7005d', 'date': '2016-04-26 06:26:28', 'status': false},
  {'amount': '11', 'tx_id': '0x6e88a1e7da6c2ccbe7dcbcd7a3e9711c85aef446fc20ce4870a697fa6da7005d', 'date': '2016-04-10 10:28:46', 'status': true},
  {'amount': '56', 'tx_id': '0x6e88a1e7da6c2ccbe7dcbcd7a3e9711c85aef446fc20ce4870a697fa6da7005d', 'date': '2016-12-06 14:38:38', 'status': false}
]
import Top from '@/components/Top.vue'
export default {
  components: {
    Top
  },
  methods: {
    copy () {
      let inp = document.createElement('input')
      document.body.appendChild(inp)
      inp.value = this.ethadd
      inp.select()
      document.execCommand('copy', false)
      inp.remove()
      this.$snackbar.open({
        message: 'You have copied address to clipboard',
        type: 'is-danger',
        position: 'is-top',
        actionText: 'Ok',
        indefinite: false
      })
    }
  },
  data () {
    return {
      data,
      ethadd: '0xe18caa04d798405a55091ac167828a680e3aadba',
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 20,
      name: 'John Silver',
      balance: 123,
      inOrder: 0,
      availableBalance: 123
    }
  }
}
</script>
