import Web3 from 'web3';
import axios from 'axios';
const contractAddress = '0x...'; // replace with the contract address
// const contractABI = [...]; // replace with the contract ABI
const contract = new Web3.eth.Contract(contractABI, contractAddress);


async function addBlock(data) {
    const accounts = await web3.eth.getAccounts();
    const response = await axios.post('http://localhost:3001/blockchain', { data, from: accounts[0] });
    return response.data;
  }
  
  async function getLatestBlock() {
    const response = await axios.get('http://localhost:3001/blockchain/latest');
    return response.data;
  }
  