require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender shaft file razor pave protect coral light army gasp'; 
let testAccounts = [
"0x5d4caf314cae38ba20c4b167dfa2608db9c1bb85d92bf1b455335689eb27717c",
"0xbd09657060d1de548f312f801bcb667f0074abe560fd31b36faf6f0a37bac04d",
"0x93c526fa0397dadeb3ab8e4df8f422e728cd9894f6e4c0cf354343d425202f75",
"0xcc7e949c76708aa3748b3022a69ebed3c21fbe282e7af32a8c5b1b7064563eaf",
"0x0d8b604ae4f170d39df4b0a144c6a53e0de825da5a43af9f01b04cc5cbfa618a",
"0x5e591c93289ee3e276b783710b22a16940cfdb221e4e58031408507b3b0fbd28",
"0x5f780ae7078781f9d9f30f23b7eaafae10122227e52693f0bb165314c367b765",
"0x81c46ac6a437bcef0436f825beeb97428bfb4f1eb94ca6784e1a45b966479c44",
"0x71d36e0d9021b8f7ff50b54add45681e413c5b06f00b7a0f51b569dc206a8f14",
"0xc1e13010b3bc8098ac5b4d3654e79fd4fb24f0da90d661fb326d1f5275867710"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


