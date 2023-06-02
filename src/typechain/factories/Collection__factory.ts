/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Collection, CollectionInterface } from "../Collection";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenUri",
        type: "string",
      },
    ],
    name: "TokenMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620035c3380380620035c38339818101604052810190620000379190620003b0565b818181600090805190602001906200005192919062000163565b5080600190805190602001906200006a92919062000163565b5050506200008d620000816200009560201b60201c565b6200009d60201b60201c565b50506200049a565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001719062000464565b90600052602060002090601f016020900481019282620001955760008555620001e1565b82601f10620001b057805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e0578251825591602001919060010190620001c3565b5b509050620001f09190620001f4565b5090565b5b808211156200020f576000816000905550600101620001f5565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200027c8262000231565b810181811067ffffffffffffffff821117156200029e576200029d62000242565b5b80604052505050565b6000620002b362000213565b9050620002c1828262000271565b919050565b600067ffffffffffffffff821115620002e457620002e362000242565b5b620002ef8262000231565b9050602081019050919050565b60005b838110156200031c578082015181840152602081019050620002ff565b838111156200032c576000848401525b50505050565b6000620003496200034384620002c6565b620002a7565b9050828152602081018484840111156200036857620003676200022c565b5b62000375848285620002fc565b509392505050565b600082601f83011262000395576200039462000227565b5b8151620003a784826020860162000332565b91505092915050565b60008060408385031215620003ca57620003c96200021d565b5b600083015167ffffffffffffffff811115620003eb57620003ea62000222565b5b620003f9858286016200037d565b925050602083015167ffffffffffffffff8111156200041d576200041c62000222565b5b6200042b858286016200037d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200047d57607f821691505b6020821081141562000494576200049362000435565b5b50919050565b61311980620004aa6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102a4578063c87b56dd146102c0578063d204c45e146102f0578063e985e9c51461030c578063f2fde38b1461033c5761010b565b8063715018a6146102425780638da5cb5b1461024c57806395d89b411461026a578063a22cb465146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611d31565b610358565b6040516101379190611d79565b60405180910390f35b61014861043a565b6040516101559190611e2d565b60405180910390f35b61017860048036038101906101739190611e85565b6104cc565b6040516101859190611ef3565b60405180910390f35b6101a860048036038101906101a39190611f3a565b610551565b005b6101c460048036038101906101bf9190611f7a565b610669565b005b6101e060048036038101906101db9190611f7a565b6106c9565b005b6101fc60048036038101906101f79190611e85565b6106e9565b6040516102099190611ef3565b60405180910390f35b61022c60048036038101906102279190611fcd565b61079b565b6040516102399190612009565b60405180910390f35b61024a610853565b005b6102546108db565b6040516102619190611ef3565b60405180910390f35b610272610905565b60405161027f9190611e2d565b60405180910390f35b6102a2600480360381019061029d9190612050565b610997565b005b6102be60048036038101906102b991906121c5565b6109ad565b005b6102da60048036038101906102d59190611e85565b610a0f565b6040516102e79190611e2d565b60405180910390f35b61030a600480360381019061030591906122e9565b610a21565b005b61032660048036038101906103219190612345565b610b0b565b6040516103339190611d79565b60405180910390f35b61035660048036038101906103519190611fcd565b610b9f565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610433575061043282610c97565b5b9050919050565b606060008054610449906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610475906123b4565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d782610d01565b610516576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050d90612458565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061055c826106e9565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c4906124ea565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105ec610d6d565b73ffffffffffffffffffffffffffffffffffffffff16148061061b575061061a81610615610d6d565b610b0b565b5b61065a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106519061257c565b60405180910390fd5b6106648383610d75565b505050565b61067a610674610d6d565b82610e2e565b6106b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b09061260e565b60405180910390fd5b6106c4838383610f0c565b505050565b6106e4838383604051806020016040528060008152506109ad565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610792576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610789906126a0565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561080c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080390612732565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61085b610d6d565b73ffffffffffffffffffffffffffffffffffffffff166108796108db565b73ffffffffffffffffffffffffffffffffffffffff16146108cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c69061279e565b60405180910390fd5b6108d96000611173565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610914906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610940906123b4565b801561098d5780601f106109625761010080835404028352916020019161098d565b820191906000526020600020905b81548152906001019060200180831161097057829003601f168201915b5050505050905090565b6109a96109a2610d6d565b8383611239565b5050565b6109be6109b8610d6d565b83610e2e565b6109fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f49061260e565b60405180910390fd5b610a09848484846113a6565b50505050565b6060610a1a82611402565b9050919050565b610a29610d6d565b73ffffffffffffffffffffffffffffffffffffffff16610a476108db565b73ffffffffffffffffffffffffffffffffffffffff1614610a9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a949061279e565b60405180910390fd5b6000610aa96008611554565b9050610ab56008611562565b610abf8382611578565b610ac98183611596565b7fc9fee7cd4889f66f10ff8117316524260a5242e88e25e0656dfb3f4196a2191730848385604051610afe94939291906127be565b60405180910390a1505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610ba7610d6d565b73ffffffffffffffffffffffffffffffffffffffff16610bc56108db565b73ffffffffffffffffffffffffffffffffffffffff1614610c1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c129061279e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c829061287c565b60405180910390fd5b610c9481611173565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610de8836106e9565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610e3982610d01565b610e78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6f9061290e565b60405180910390fd5b6000610e83836106e9565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ec55750610ec48185610b0b565b5b80610f0357508373ffffffffffffffffffffffffffffffffffffffff16610eeb846104cc565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610f2c826106e9565b73ffffffffffffffffffffffffffffffffffffffff1614610f82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f79906129a0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ff2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe990612a32565b60405180910390fd5b610ffd83838361160a565b611008600082610d75565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110589190612a81565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110af9190612ab5565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461116e83838361160f565b505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129f90612b57565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113999190611d79565b60405180910390a3505050565b6113b1848484610f0c565b6113bd84848484611614565b6113fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f390612be9565b60405180910390fd5b50505050565b606061140d82610d01565b61144c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144390612c7b565b60405180910390fd5b600060066000848152602001908152602001600020805461146c906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611498906123b4565b80156114e55780601f106114ba576101008083540402835291602001916114e5565b820191906000526020600020905b8154815290600101906020018083116114c857829003601f168201915b5050505050905060006114f66117ab565b905060008151141561150c57819250505061154f565b600082511115611541578082604051602001611529929190612cd7565b6040516020818303038152906040529250505061154f565b61154a846117c2565b925050505b919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b611592828260405180602001604052806000815250611869565b5050565b61159f82610d01565b6115de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d590612d6d565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611605929190611c22565b505050565b505050565b505050565b60006116358473ffffffffffffffffffffffffffffffffffffffff166118c4565b1561179e578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261165e610d6d565b8786866040518563ffffffff1660e01b81526004016116809493929190612de2565b602060405180830381600087803b15801561169a57600080fd5b505af19250505080156116cb57506040513d601f19601f820116820180604052508101906116c89190612e43565b60015b61174e573d80600081146116fb576040519150601f19603f3d011682016040523d82523d6000602084013e611700565b606091505b50600081511415611746576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161173d90612be9565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506117a3565b600190505b949350505050565b606060405180602001604052806000815250905090565b60606117cd82610d01565b61180c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180390612ee2565b60405180910390fd5b60006118166117ab565b905060008151116118365760405180602001604052806000815250611861565b80611840846118e7565b604051602001611851929190612cd7565b6040516020818303038152906040525b915050919050565b6118738383611a48565b6118806000848484611614565b6118bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b690612be9565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060600082141561192f576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611a43565b600082905060005b6000821461196157808061194a90612f02565b915050600a8261195a9190612f7a565b9150611937565b60008167ffffffffffffffff81111561197d5761197c61209a565b5b6040519080825280601f01601f1916602001820160405280156119af5781602001600182028036833780820191505090505b5090505b60008514611a3c576001826119c89190612a81565b9150600a856119d79190612fab565b60306119e39190612ab5565b60f81b8183815181106119f9576119f8612fdc565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611a359190612f7a565b94506119b3565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aaf90613057565b60405180910390fd5b611ac181610d01565b15611b01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611af8906130c3565b60405180910390fd5b611b0d6000838361160a565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b5d9190612ab5565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611c1e6000838361160f565b5050565b828054611c2e906123b4565b90600052602060002090601f016020900481019282611c505760008555611c97565b82601f10611c6957805160ff1916838001178555611c97565b82800160010185558215611c97579182015b82811115611c96578251825591602001919060010190611c7b565b5b509050611ca49190611ca8565b5090565b5b80821115611cc1576000816000905550600101611ca9565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d0e81611cd9565b8114611d1957600080fd5b50565b600081359050611d2b81611d05565b92915050565b600060208284031215611d4757611d46611ccf565b5b6000611d5584828501611d1c565b91505092915050565b60008115159050919050565b611d7381611d5e565b82525050565b6000602082019050611d8e6000830184611d6a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611dce578082015181840152602081019050611db3565b83811115611ddd576000848401525b50505050565b6000601f19601f8301169050919050565b6000611dff82611d94565b611e098185611d9f565b9350611e19818560208601611db0565b611e2281611de3565b840191505092915050565b60006020820190508181036000830152611e478184611df4565b905092915050565b6000819050919050565b611e6281611e4f565b8114611e6d57600080fd5b50565b600081359050611e7f81611e59565b92915050565b600060208284031215611e9b57611e9a611ccf565b5b6000611ea984828501611e70565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611edd82611eb2565b9050919050565b611eed81611ed2565b82525050565b6000602082019050611f086000830184611ee4565b92915050565b611f1781611ed2565b8114611f2257600080fd5b50565b600081359050611f3481611f0e565b92915050565b60008060408385031215611f5157611f50611ccf565b5b6000611f5f85828601611f25565b9250506020611f7085828601611e70565b9150509250929050565b600080600060608486031215611f9357611f92611ccf565b5b6000611fa186828701611f25565b9350506020611fb286828701611f25565b9250506040611fc386828701611e70565b9150509250925092565b600060208284031215611fe357611fe2611ccf565b5b6000611ff184828501611f25565b91505092915050565b61200381611e4f565b82525050565b600060208201905061201e6000830184611ffa565b92915050565b61202d81611d5e565b811461203857600080fd5b50565b60008135905061204a81612024565b92915050565b6000806040838503121561206757612066611ccf565b5b600061207585828601611f25565b92505060206120868582860161203b565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6120d282611de3565b810181811067ffffffffffffffff821117156120f1576120f061209a565b5b80604052505050565b6000612104611cc5565b905061211082826120c9565b919050565b600067ffffffffffffffff8211156121305761212f61209a565b5b61213982611de3565b9050602081019050919050565b82818337600083830152505050565b600061216861216384612115565b6120fa565b90508281526020810184848401111561218457612183612095565b5b61218f848285612146565b509392505050565b600082601f8301126121ac576121ab612090565b5b81356121bc848260208601612155565b91505092915050565b600080600080608085870312156121df576121de611ccf565b5b60006121ed87828801611f25565b94505060206121fe87828801611f25565b935050604061220f87828801611e70565b925050606085013567ffffffffffffffff8111156122305761222f611cd4565b5b61223c87828801612197565b91505092959194509250565b600067ffffffffffffffff8211156122635761226261209a565b5b61226c82611de3565b9050602081019050919050565b600061228c61228784612248565b6120fa565b9050828152602081018484840111156122a8576122a7612095565b5b6122b3848285612146565b509392505050565b600082601f8301126122d0576122cf612090565b5b81356122e0848260208601612279565b91505092915050565b60008060408385031215612300576122ff611ccf565b5b600061230e85828601611f25565b925050602083013567ffffffffffffffff81111561232f5761232e611cd4565b5b61233b858286016122bb565b9150509250929050565b6000806040838503121561235c5761235b611ccf565b5b600061236a85828601611f25565b925050602061237b85828601611f25565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806123cc57607f821691505b602082108114156123e0576123df612385565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612442602c83611d9f565b915061244d826123e6565b604082019050919050565b6000602082019050818103600083015261247181612435565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006124d4602183611d9f565b91506124df82612478565b604082019050919050565b60006020820190508181036000830152612503816124c7565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000612566603883611d9f565b91506125718261250a565b604082019050919050565b6000602082019050818103600083015261259581612559565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b60006125f8603183611d9f565b91506126038261259c565b604082019050919050565b60006020820190508181036000830152612627816125eb565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b600061268a602983611d9f565b91506126958261262e565b604082019050919050565b600060208201905081810360008301526126b98161267d565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b600061271c602a83611d9f565b9150612727826126c0565b604082019050919050565b6000602082019050818103600083015261274b8161270f565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612788602083611d9f565b915061279382612752565b602082019050919050565b600060208201905081810360008301526127b78161277b565b9050919050565b60006080820190506127d36000830187611ee4565b6127e06020830186611ee4565b6127ed6040830185611ffa565b81810360608301526127ff8184611df4565b905095945050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612866602683611d9f565b91506128718261280a565b604082019050919050565b6000602082019050818103600083015261289581612859565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006128f8602c83611d9f565b91506129038261289c565b604082019050919050565b60006020820190508181036000830152612927816128eb565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061298a602583611d9f565b91506129958261292e565b604082019050919050565b600060208201905081810360008301526129b98161297d565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612a1c602483611d9f565b9150612a27826129c0565b604082019050919050565b60006020820190508181036000830152612a4b81612a0f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a8c82611e4f565b9150612a9783611e4f565b925082821015612aaa57612aa9612a52565b5b828203905092915050565b6000612ac082611e4f565b9150612acb83611e4f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612b0057612aff612a52565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612b41601983611d9f565b9150612b4c82612b0b565b602082019050919050565b60006020820190508181036000830152612b7081612b34565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612bd3603283611d9f565b9150612bde82612b77565b604082019050919050565b60006020820190508181036000830152612c0281612bc6565b9050919050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b6000612c65603183611d9f565b9150612c7082612c09565b604082019050919050565b60006020820190508181036000830152612c9481612c58565b9050919050565b600081905092915050565b6000612cb182611d94565b612cbb8185612c9b565b9350612ccb818560208601611db0565b80840191505092915050565b6000612ce38285612ca6565b9150612cef8284612ca6565b91508190509392505050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612d57602e83611d9f565b9150612d6282612cfb565b604082019050919050565b60006020820190508181036000830152612d8681612d4a565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612db482612d8d565b612dbe8185612d98565b9350612dce818560208601611db0565b612dd781611de3565b840191505092915050565b6000608082019050612df76000830187611ee4565b612e046020830186611ee4565b612e116040830185611ffa565b8181036060830152612e238184612da9565b905095945050505050565b600081519050612e3d81611d05565b92915050565b600060208284031215612e5957612e58611ccf565b5b6000612e6784828501612e2e565b91505092915050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612ecc602f83611d9f565b9150612ed782612e70565b604082019050919050565b60006020820190508181036000830152612efb81612ebf565b9050919050565b6000612f0d82611e4f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612f4057612f3f612a52565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612f8582611e4f565b9150612f9083611e4f565b925082612fa057612f9f612f4b565b5b828204905092915050565b6000612fb682611e4f565b9150612fc183611e4f565b925082612fd157612fd0612f4b565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613041602083611d9f565b915061304c8261300b565b602082019050919050565b6000602082019050818103600083015261307081613034565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006130ad601c83611d9f565b91506130b882613077565b602082019050919050565b600060208201905081810360008301526130dc816130a0565b905091905056fea26469706673582212203b9c5ee7cf2379795ddd2992f906f025f6a45f07183362f5f38232db8943cf9264736f6c63430008090033";

export class Collection__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Collection> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<Collection>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): Collection {
    return super.attach(address) as Collection;
  }
  connect(signer: Signer): Collection__factory {
    return super.connect(signer) as Collection__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollectionInterface {
    return new utils.Interface(_abi) as CollectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Collection {
    return new Contract(address, _abi, signerOrProvider) as Collection;
  }
}
