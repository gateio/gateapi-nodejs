# MyFuturesTrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Trade ID. | [optional] [default to undefined]
**createTime** | **number** | Trading time. | [optional] [default to undefined]
**contract** | **string** | Futures contract. | [optional] [default to undefined]
**orderId** | **string** | Order ID related. | [optional] [default to undefined]
**size** | **number** | Trading size. | [optional] [default to undefined]
**closeSize** | **number** | Number of closed positions:  close_size&#x3D;0 &amp;&amp; size＞0 Open long position close_size&#x3D;0 &amp;&amp; size＜0 Open short position close_size&gt;0 &amp;&amp; size&gt;0 &amp;&amp; size &lt;&#x3D; close_size Close &gt; close_size Close short position and open long position close_size&lt;0 &amp;&amp; size&lt;0 &amp;&amp; size &gt;&#x3D; close_size Close long postion close_size&lt;0 &amp;&amp; size&lt;0 &amp;&amp; size &lt; close_size Close long position and open short position | [optional] [default to undefined]
**price** | **string** | Trading price. | [optional] [default to undefined]
**role** | **string** | Trade role. Available values are &#x60;taker&#x60; and &#x60;maker&#x60;. | [optional] [default to undefined]
**text** | **string** | User defined information. | [optional] [default to undefined]
**fee** | **string** | Fee deducted. | [optional] [default to undefined]
**pointFee** | **string** | Points used to deduct fee. | [optional] [default to undefined]

## Enum: MyFuturesTrade.Role

* `Taker` (value: `'taker'`)

* `Maker` (value: `'maker'`)


