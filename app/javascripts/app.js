// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";
import * as fs from 'fs-web';

import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

import airdrop_artifacts from '../../build/contracts/Airdroplet.json'
import ERC20_artifacts from '../../build/contracts/Token.json'

var ERC20 = contract(ERC20_artifacts);
var Airdrop = contract(airdrop_artifacts);

var air_add = "0x1990c7c0a4a0833e830c2c06a7bd777603b85b37";
var accounts;
var account;
var tokenadd;
var decimals;
var x;

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    ERC20.setProvider(web3.currentProvider);
    Airdrop.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.

      account = web3.eth.accounts[0];
      self.setStatus("Successfully connected to Metamask account: " + account,1);
      if(account == undefined){self.setStatus("Error connecting to Metamask account.",0);}

  },

  setStatus: function(message,y) {

    var status = document.getElementById("status");
    if(y == 0){status.style.color = "red";}
    else if(y == 1){status.style.color = "green";}
    status.innerHTML = message;

  },


  initialiseERC20: function() {


    tokenadd = document.getElementById('tkadd').value;

    var self = this;
    var meta;


    ERC20.at(tokenadd).then(function(instance) {
      meta = instance;
      return meta.name.call(account, {from: account});
    }).then(function(value) {
      var name_element = document.getElementById("name");
      name_element.innerHTML = value.valueOf();
      self.setStatus("Success loading ERC20.",1);
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting ERC20 name; see log.",0);
    });

    ERC20.at(tokenadd).then(function(instance) {
      meta = instance;
      return meta.decimals.call(account, {from: account});
    }).then(function(value) {
       decimals = parseInt(value);
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting ERC20 decimals; see log.",0);
    });

    var supply = 9999999999999 * Math.pow(10,decimals);

    console.log(supply);
    ERC20.at(tokenadd).then(function(instance) {
      meta = instance;
      return meta.approve(air_add, supply, {from: account, gas: 6521975});
    }).then(function(value) {
        console.log(value);
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting ERC20 approval; see log.",0);
    });




  },

  loadArray: function(arr){x = 0},

  checkAdd: function(sample,j) {

  var self = this;

  var newly = 0;
  var result = web3.isAddress(sample);
  if(result == false){

                        newly = web3.toChecksumAddress(sample);
                        result = web3.isAddress(newly);
                        if(result == false){newly = 0;
                        console.log("Invalid address: " + sample + " on line " + parseInt(j)) ;}

                     }
  else if(result == true){newly = web3.toChecksumAddress(sample);}

  return newly;

  },

  sendCoin: function() {

    var self = this;
    var meta;
    var amount = document.getElementById("amount").value;
    var amount = parseInt(amount * Math.pow(10,decimals));
    var target = [];

      if(x == 0 && tarone.length != 0){target = tarone;}
      else if(x == 1 && tartwo.length != 0){target = tartwo;}
      else if(x == 2 && tarthree.length != 0){target = tarthree;}
      else if(x == 3 && tarfour.length != 0){target = tarfour;}
      else if(x == 4 && tarfive.length != 0){target = tarfive;}
      else if(x == 5 && tarsix.length != 0){target = tarsix;}
      else if(x == 6 && tarseven.length != 0){target = tarseven;}
      else if(x == 7 && tareight.length != 0){target = tareight;}
      else if(x == 8 && tarnine.length != 0){target = tarnine;}
      else if(x == 9 && tarten.length != 0){target = tarten;}
      else if(x == 10 && taroneone.length != 0){target = taroneone;}
      else if(x == 11 && taronetwo.length != 0){target = taronetwo;}
      else if(x == 12 && taronethree.length != 0){target = taronethree;}
      else if(x == 13 && taronefour.length != 0){target = taronefour;}
      else if(x == 14 && taronefive.length != 0){target = taronefive;}
      else if(x == 15 && taronesix.length != 0){target = taronesix;}
      else if(x == 16 && taroneseven.length != 0){target = taroneseven;}
      else if(x == 17 && taroneeight.length != 0){target = taroneeight;}
      else if(x == 18 && taronenine.length != 0){target = taronenine;}
      else if(x == 19 && taroneten.length != 0){target = taroneten;}

      console.log(target);
      console.log(amount);
      console.log(tokenadd);
    Airdrop.at(air_add).then(function(instance) {
      meta = instance;
      return meta.airdropExecute(tokenadd, target, amount, {from: account, gas: 6521975});
    }).then(function(value) {
      self.setStatus("Transaction batch " + parseInt(x+1)+ " complete." ,1);
      x++;
      console.log(value);
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error sending batch " + parseInt(x+1) + " ; see log.",0);
    });


  }

};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // If no injected web3 instance is detected, fallback to Truffle Develop.
      App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
    }

  App.start();
});
