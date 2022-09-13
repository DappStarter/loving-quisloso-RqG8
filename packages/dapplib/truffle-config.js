require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index reward stick common hockey knee swift gather'; 
let testAccounts = [
"0xc8a0e233e2b2452950e1499a22d24903380380b699efcc5da4ea2b44361ce80f",
"0xb4ea3949f4ab9aa3edbc63af74394176c1019a78ae0887310ee757a8b33e7de3",
"0x9a6e99ea7d6d24750b4b691e16d5330e1ab6b0dc03f1bffbc47602e8469a4ed5",
"0x69d79dcd435517ea46bc316332f5ae245d0159b0a7ad409a00a2855a4b8ba383",
"0xe57725934e32c2ae8c3b7cf1929dd138af69b44dbcd4b88e8aabc9a489cd1a06",
"0xa60c064d3efa81f0f042f76ff10fd299a8f5ab58197782760b7272ca73bcd756",
"0xd0f5f3f3c3d04a90ab5bcb5e4d3d77849d23137cd0406ffc1e9b668249cdfdca",
"0xdcb0498891af641bbbba322819997ecdb55b8601168a763fdb1e9f4c33fd952d",
"0x4ddc468a5075aa15ae0985846810ea2352e2596cbc2be5ded720237ec9e64cdd",
"0xf8fea3e1dae44dd679496a6624f8ba25a1176a1c7114f90de08331d77166d840"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

