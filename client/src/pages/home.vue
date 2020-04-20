<template lang='pug'>
layout#page-home
  .value-prop
    h2
      | donation in pie slices as dao
      br
    ul.benefits
      li Issue tokens to match donations towards your project
      li Use token ownership to control governance of the project
      li Give shareholders instant liquidity on the blockchain

  .create
    create-company

  .donate
    div
      v-button.chic-black(@click='openWyre') Donate to this project!
    .dogfood
      | We manage these funds using Slice of DAO!
    .links
      a.github-logo(href='https://github.com/cryptopandarama/donate-pie', target="_blank")
        github-logo
</template>

<script>
import createCompany from './create-company.vue';

const components = {
  layout: require('@/components/layout').default,
  createCompany,
  logo: require('@/assets/images/logo.svg?inline').default,
  'github-logo': require('@/assets/images/github.svg?inline').default,
};

export default {
  components,
  metaInfo() {
    return {
      script: [
        {
          src: 'https://verify.sendwyre.com/js/widget-loader.js',
        },
      ],
    };
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    openWyre() {
      this.wyreWidget = new window.Wyre.Widget({
        env: 'test',
        accountId: 'AK-T7RJM3TT-LW7FTE76-BX7AWCBL-UU8H6XXJ',
        auth: { type: 'metamask' },
        operation: {
          type: 'debitcard',
          dest: 'ethereum:0xBDcda71cde2B2481fA2f8756c497291b2f60e374',
          sourceCurrency: 'USD',
          destCurrency: 'ETH',
          destAmount: 0.05,
        },
      });

      this.wyreWidget.open();
    },
  },
  mounted() {
  },
  beforeDestroy() {
  },

};
</script>

<style lang='less'>
.value-prop {
  padding: 2rem 9%;
  color: white;
  text-align: center;
  h2 {}
  .benefits {
    list-style: none;
    margin-top: 10px;
      font-size: 18px;
      line-height: 1.3em;
  }
}

.create-new {
  display: flex;
  align-items: center;
  justify-content: center;
}

.donate {
  margin-top: 40px;
  text-align: center;
}

.dogfood {
  vertical-align: middle;
  line-height: 20px;
  font-style: italic;
  font-size: 11px;
  text-align: center;
  padding-top: 5px;
  color: white;
}
.create-company {
  padding: 1% 3%;
}

.github-logo {
  width: 50px;
  height: 50px;
  color: white;
  &:hover {
    color: @brand-color;
  }

  svg {
    display: inline-block;
    width: 50px;
    height: 50px;
    fill: currentColor;
  }
}

.links {
  padding: 20px 0;
}

</style>
