export const tokens = {
  avax: {
    avax: {
      name: "avax",
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      decimals: 18,
      priceFeed: "0x0A77230d17318075983913bC2145DB16C7366156",
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      isStrictStable: false,
      tokenWeight: 7000,
      minProfitBps: 0,
      maxUsdgAmount: 5 * 1000 * 1000,
      bufferAmount: 200000,
      isStable: false,
      isShortable: true,
      maxGlobalLongSize: 1 * 1000 * 1000,
      maxGlobalShortSize: 500 * 1000,
      spreadBasisPoints: 0,
    },
    eth: {
      name: "eth",
      address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      decimals: 18,
      priceFeed: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      isStrictStable: false,
      tokenWeight: 20000,
      minProfitBps: 0,
      maxUsdgAmount: 30 * 1000 * 1000,
      bufferAmount: 5500,
      isStable: false,
      isShortable: true,
      maxGlobalLongSize: 15 * 1000 * 1000,
      maxGlobalShortSize: 8 * 1000 * 1000,
    },
    btcb: {
      name: "btcb",
      address: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
      decimals: 8,
      priceFeed: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      isStrictStable: false,
      tokenWeight: 20000,
      minProfitBps: 0,
      maxUsdgAmount: 30 * 1000 * 1000,
      bufferAmount: 300,
      isStable: false,
      isShortable: true,
      maxGlobalLongSize: 15 * 1000 * 1000,
      maxGlobalShortSize: 8 * 1000 * 1000,
    },
    btc: {
      name: "btc",
      address: "0x50b7545627a5162f82a992c33b87adc75187b218",
      decimals: 8,
      priceFeed: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      isStrictStable: false,
      tokenWeight: 3000,
      minProfitBps: 0,
      maxUsdgAmount: 5 * 1000 * 1000,
      bufferAmount: 100,
      isStable: false,
      isShortable: true,
      maxGlobalLongSize: 10 * 1000 * 1000,
      maxGlobalShortSize: 1000,
    },
    mim: {
      name: "mim",
      address: "0x130966628846BFd36ff31a822705796e8cb8C18D",
      decimals: 18,
      priceFeed: "0x54EdAB30a7134A16a54218AE64C73e1DAf48a8Fb",
      priceDecimals: 8,
      isStrictStable: true,
      tokenWeight: 1,
      minProfitBps: 0,
      maxUsdgAmount: 1,
      bufferAmount: 0,
      isStable: true,
      isShortable: false,
    },
    usdc: {
      name: "usdc",
      address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
      decimals: 6,
      priceFeed: "0xF096872672F44d6EBA71458D74fe67F9a77a23B9",
      priceDecimals: 8,
      isStrictStable: true,
      tokenWeight: 47000,
      minProfitBps: 0,
      maxUsdgAmount: 50 * 1000 * 1000,
      bufferAmount: 15 * 1000 * 1000,
      isStable: true,
      isShortable: false,
    },
    usdce: {
      name: "usdce",
      address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",
      decimals: 6,
      priceFeed: "0xF096872672F44d6EBA71458D74fe67F9a77a23B9",
      priceDecimals: 8,
      isStrictStable: true,
      tokenWeight: 3000,
      minProfitBps: 0,
      maxUsdgAmount: 3 * 1000 * 1000,
      bufferAmount: 1 * 1000 * 1000,
      isStable: true,
      isShortable: false,
    },
    nativeToken: {
      name: "avax",
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      decimals: 18,
    },
  },
};

export type NativeToken = {
  name: string;
  address: string;
  decimals: number;
};

export type TokenData = {
  name: string;
  address: string;
  decimals: number;
  priceFeed: string;
  priceDecimals: number;
  isStrictStable: boolean;
  tokenWeight: number;
  minProfitBps: number;
  maxUsdgAmount: number;
  bufferAmount: number;
  isStable: boolean;
  isShortable: boolean;
  fastPricePrecision?: number;
  maxCumulativeDeltaDiff?: number;
  maxGlobalLongSize?: number;
  maxGlobalShortSize?: number;
  spreadBasisPoints?: number;
};
