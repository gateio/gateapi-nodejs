# MyFuturesTrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Trade ID | [optional] [default to undefined]
**createTime** | **number** | Trading time | [optional] [default to undefined]
**contract** | **string** | Futures contract | [optional] [default to undefined]
**orderId** | **string** | Order ID related | [optional] [default to undefined]
**size** | **number** | Trading size | [optional] [default to undefined]
**closeSize** | **number** | 平仓数量:  close_size&#x3D;0 &amp;&amp; size＞0       开多 close_size&#x3D;0 &amp;&amp; size＜0       开空 close_size&gt;0 &amp;&amp; size&gt;0 &amp;&amp; size &lt;&#x3D; close_size 平空 close_size&gt;0 &amp;&amp; size&gt;0 &amp;&amp; size &gt; close_size 平空且开多 close_size&lt;0 &amp;&amp; size&lt;0 &amp;&amp; size &gt;&#x3D; close_size 平多 close_size&lt;0 &amp;&amp; size&lt;0 &amp;&amp; size &lt; close_size 平多且开空 | [optional] [default to undefined]
**price** | **string** | Trading price | [optional] [default to undefined]
**role** | **string** | Trade role. Available values are &#x60;taker&#x60; and &#x60;maker&#x60; | [optional] [default to undefined]
**text** | **string** | User defined information | [optional] [default to undefined]
**fee** | **string** | Fee deducted | [optional] [default to undefined]
**pointFee** | **string** | Points used to deduct fee | [optional] [default to undefined]

## Enum: MyFuturesTrade.Role

* `Taker` (value: `'taker'`)

* `Maker` (value: `'maker'`)


