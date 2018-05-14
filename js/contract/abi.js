 abi  =[
	{
		"constant": true,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			},
			{
				"name": "owned",
				"type": "uint256"
			},
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "CalculatePriceofRigs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "minerAddr",
				"type": "address"
			}
		],
		"name": "GetProductionPerSecond",
		"outputs": [
			{
				"name": "personalProduction",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "approvee",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "startIdx",
				"type": "uint256"
			}
		],
		"name": "HasBooster",
		"outputs": [
			{
				"name": "hasBoost",
				"type": "uint8[10]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetRigData",
		"outputs": [
			{
				"name": "_basePrice",
				"type": "uint256"
			},
			{
				"name": "_baseOutput",
				"type": "uint256"
			},
			{
				"name": "_unlockMultiplier",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "referral",
				"type": "address"
			}
		],
		"name": "StartNewMiner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundICO",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "miner",
				"type": "address"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "WithdrawPotShare",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetTotalRigCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "miner",
				"type": "address"
			}
		],
		"name": "GetMinerUnclaimedICOShare",
		"outputs": [
			{
				"name": "unclaimedPot",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetMaxPrestigeLevel",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "BuyBooster",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "rigIdx",
				"type": "uint8"
			}
		],
		"name": "UnlockRig",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetGlobalProduction",
		"outputs": [
			{
				"name": "globalMoney",
				"type": "uint256"
			},
			{
				"name": "globalHashRate",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			},
			{
				"name": "_price",
				"type": "uint256"
			},
			{
				"name": "_bonusPct",
				"type": "uint256"
			}
		],
		"name": "AddNewPrestige",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			},
			{
				"name": "_basePrice",
				"type": "uint256"
			},
			{
				"name": "_baseOutput",
				"type": "uint256"
			},
			{
				"name": "_unlockMultiplier",
				"type": "uint256"
			}
		],
		"name": "AddorModifyRig",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetPotInfo",
		"outputs": [
			{
				"name": "_honeyPotAmount",
				"type": "uint256"
			},
			{
				"name": "_devFunds",
				"type": "uint256"
			},
			{
				"name": "_nextDistributionTime",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "rigIdx",
				"type": "uint8"
			},
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "UpgradeRig",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "miner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetBoosterCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "WithdrawDevFunds",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "minerAddr",
				"type": "address"
			},
			{
				"name": "startIdx",
				"type": "uint256"
			}
		],
		"name": "GetMinerRigsCount",
		"outputs": [
			{
				"name": "rigs",
				"type": "uint256[10]"
			},
			{
				"name": "totalProduction",
				"type": "uint256[10]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetTotalMinerCount",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetCurrentICOCycle",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "miner",
				"type": "address"
			},
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetMinerICOData",
		"outputs": [
			{
				"name": "ICOFund",
				"type": "uint256"
			},
			{
				"name": "ICOShare",
				"type": "uint256"
			},
			{
				"name": "lastClaimIndex",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetPrestigeInfo",
		"outputs": [
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "bonusPct",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetICOData",
		"outputs": [
			{
				"name": "ICOFund",
				"type": "uint256"
			},
			{
				"name": "ICOPot",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "minerAddr",
				"type": "address"
			}
		],
		"name": "GetMinerData",
		"outputs": [
			{
				"name": "money",
				"type": "uint256"
			},
			{
				"name": "lastupdate",
				"type": "uint256"
			},
			{
				"name": "prodPerSec",
				"type": "uint256"
			},
			{
				"name": "unclaimedPot",
				"type": "uint256"
			},
			{
				"name": "globalFlat",
				"type": "uint256"
			},
			{
				"name": "globalPct",
				"type": "uint256"
			},
			{
				"name": "prestigeLevel",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetMinerAt",
		"outputs": [
			{
				"name": "minerAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "WithdrawICOEarnings",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "miner",
				"type": "address"
			},
			{
				"name": "approvee",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "ReleaseICO",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetBoosterData",
		"outputs": [
			{
				"name": "rigIdx",
				"type": "int256"
			},
			{
				"name": "flatBonus",
				"type": "uint256"
			},
			{
				"name": "ptcBonus",
				"type": "uint256"
			},
			{
				"name": "currentPrice",
				"type": "uint256"
			},
			{
				"name": "increasePct",
				"type": "uint256"
			},
			{
				"name": "maxNumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PrestigeUp",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			},
			{
				"name": "_rigType",
				"type": "int256"
			},
			{
				"name": "_flatBonus",
				"type": "uint256"
			},
			{
				"name": "_pctBonus",
				"type": "uint256"
			},
			{
				"name": "_ETHPrice",
				"type": "uint256"
			},
			{
				"name": "_priceIncreasePct",
				"type": "uint256"
			},
			{
				"name": "_totalCount",
				"type": "uint256"
			}
		],
		"name": "AddNewBooster",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
];