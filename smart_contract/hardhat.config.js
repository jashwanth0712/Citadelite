//
require('@nomiclabs/hardhat-waffle');
module.exports ={
    solidity:'0.8.4',
    networks:{
        goerli:{
            url:"https://eth-goerli.alchemyapi.io/v2/JABXEaLfs8Ta1JmiOsQQzXMaXkaZA5FA",
            accounts:['cdf57864ee106d6d4c21e2ac8b6315c32a35a96e98ce3635c8f4858e14931578']
        }
    }
}