Queries
=======

`action`
--------

##### Response

Returns an [`Action`](#definition-Action)

##### Arguments

Name

Description

`where` - [`ActionWhereInput`](#definition-ActionWhereInput)

#### Example

##### Query

    query Action($where: ActionWhereInput) {
      action(where: $where) {
        id
        type
        configuration
      }
    }

##### Variables

    {"where": ActionWhereInput}

##### Response

    {
      "data": {
        "action": {
          "id": "xyz789",
          "type": "xyz789",
          "configuration": {}
        }
      }
    }

[Queries](#group-Operations-Queries)

`actions`
---------

##### Response

Returns an [`Actions`](#definition-Actions)

##### Arguments

Name

Description

`where` - [`ActionWhereInput`](#definition-ActionWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`ActionWhereInput`](#definition-ActionWhereInput)

`lt` - [`ActionWhereInput`](#definition-ActionWhereInput)

`like` - [`ActionWhereInput`](#definition-ActionWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Actions(
      $where: ActionWhereInput,
      $take: Int,
      $skip: Int,
      $gt: ActionWhereInput,
      $lt: ActionWhereInput,
      $like: ActionWhereInput,
      $orderBy: [JSONObject]
    ) {
      actions(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          type
          configuration
        }
        count
      }
    }

##### Variables

    {
      "where": ActionWhereInput,
      "take": 987,
      "skip": 123,
      "gt": ActionWhereInput,
      "lt": ActionWhereInput,
      "like": ActionWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"actions": {"data": [Action], "count": 123}}}

[Queries](#group-Operations-Queries)

`address`
---------

##### Response

Returns an [`Address`](#definition-Address)

##### Arguments

Name

Description

`where` - [`AddressWhereInput`](#definition-AddressWhereInput)

#### Example

##### Query

    query Address($where: AddressWhereInput) {
      address(where: $where) {
        id
        value
        publicKey
        type
        meta
        escrow {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
      }
    }

##### Variables

    {"where": AddressWhereInput}

##### Response

    {
      "data": {
        "address": {
          "id": "abc123",
          "value": "abc123",
          "publicKey": "abc123",
          "type": "xyz789",
          "meta": {},
          "escrow": Escrow
        }
      }
    }

[Queries](#group-Operations-Queries)

`addresses`
-----------

##### Response

Returns an [`Addresses`](#definition-Addresses)

##### Arguments

Name

Description

`where` - [`AddressWhereInput`](#definition-AddressWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`AddressWhereInput`](#definition-AddressWhereInput)

`lt` - [`AddressWhereInput`](#definition-AddressWhereInput)

`like` - [`AddressWhereInput`](#definition-AddressWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Addresses(
      $where: AddressWhereInput,
      $take: Int,
      $skip: Int,
      $gt: AddressWhereInput,
      $lt: AddressWhereInput,
      $like: AddressWhereInput,
      $orderBy: [JSONObject]
    ) {
      addresses(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          value
          publicKey
          type
          meta
          escrow {
            ...EscrowFragment
          }
        }
        count
      }
    }

##### Variables

    {
      "where": AddressWhereInput,
      "take": 987,
      "skip": 987,
      "gt": AddressWhereInput,
      "lt": AddressWhereInput,
      "like": AddressWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"addresses": {"data": [Address], "count": 987}}}

[Queries](#group-Operations-Queries)

`asset`
-------

##### Response

Returns an [`Asset`](#definition-Asset)

##### Arguments

Name

Description

`where` - [`AssetWhereInput`](#definition-AssetWhereInput)

#### Example

##### Query

    query Asset($where: AssetWhereInput) {
      asset(where: $where) {
        id
        type
        usdValue
        content {
          meta
          node
        }
        collateral {
          id
          assets {
            ...AssetFragment
          }
          escrow {
            ...EscrowFragment
          }
        }
        addresses {
          id
          value
          publicKey
          type
          meta
          escrow {
            ...EscrowFragment
          }
        }
        action {
          id
          type
          configuration
        }
      }
    }

##### Variables

    {"where": AssetWhereInput}

##### Response

    {
      "data": {
        "asset": {
          "id": "xyz789",
          "type": "abc123",
          "usdValue": "xyz789",
          "content": Content,
          "collateral": Collateral,
          "addresses": [Address],
          "action": Action
        }
      }
    }

[Queries](#group-Operations-Queries)

`assets`
--------

##### Response

Returns an [`Assets`](#definition-Assets)

##### Arguments

Name

Description

`where` - [`AssetWhereInput`](#definition-AssetWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`AssetWhereInput`](#definition-AssetWhereInput)

`lt` - [`AssetWhereInput`](#definition-AssetWhereInput)

`like` - [`AssetWhereInput`](#definition-AssetWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Assets(
      $where: AssetWhereInput,
      $take: Int,
      $skip: Int,
      $gt: AssetWhereInput,
      $lt: AssetWhereInput,
      $like: AssetWhereInput,
      $orderBy: [JSONObject]
    ) {
      assets(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          type
          usdValue
          content {
            ...ContentFragment
          }
          collateral {
            ...CollateralFragment
          }
          addresses {
            ...AddressFragment
          }
          action {
            ...ActionFragment
          }
        }
        count
      }
    }

##### Variables

    {
      "where": AssetWhereInput,
      "take": 123,
      "skip": 123,
      "gt": AssetWhereInput,
      "lt": AssetWhereInput,
      "like": AssetWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"assets": {"data": [Asset], "count": 123}}}

[Queries](#group-Operations-Queries)

`balance`
---------

##### Response

Returns an [`Account`](#definition-Account)

##### Arguments

Name

Description

`where` - [`AccountWhereInput`](#definition-AccountWhereInput)

#### Example

##### Query

    query Balance($where: AccountWhereInput) {
      balance(where: $where) {
        id
        wallet
        debit
        credit
      }
    }

##### Variables

    {"where": AccountWhereInput}

##### Response

    {
      "data": {
        "balance": {
          "id": "xyz789",
          "wallet": "abc123",
          "debit": "abc123",
          "credit": "xyz789"
        }
      }
    }

[Queries](#group-Operations-Queries)

`block`
-------

##### Response

Returns a [`Block`](#definition-Block)

##### Arguments

Name

Description

`where` - [`BlockWhereInput`](#definition-BlockWhereInput)

#### Example

##### Query

    query Block($where: BlockWhereInput) {
      block(where: $where) {
        id
        indexed
      }
    }

##### Variables

    {"where": BlockWhereInput}

##### Response

    {
      "data": {
        "block": {
          "id": "abc123",
          "indexed": true
        }
      }
    }

[Queries](#group-Operations-Queries)

`blocks`
--------

##### Response

Returns a [`Blocks`](#definition-Blocks)

##### Arguments

Name

Description

`where` - [`BlockWhereInput`](#definition-BlockWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`BlockWhereInput`](#definition-BlockWhereInput)

`lt` - [`BlockWhereInput`](#definition-BlockWhereInput)

`like` - [`BlockWhereInput`](#definition-BlockWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Blocks(
      $where: BlockWhereInput,
      $take: Int,
      $skip: Int,
      $gt: BlockWhereInput,
      $lt: BlockWhereInput,
      $like: BlockWhereInput,
      $orderBy: [JSONObject]
    ) {
      blocks(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          indexed
        }
        count
      }
    }

##### Variables

    {
      "where": BlockWhereInput,
      "take": 987,
      "skip": 987,
      "gt": BlockWhereInput,
      "lt": BlockWhereInput,
      "like": BlockWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"blocks": {"data": [Block], "count": 123}}}

[Queries](#group-Operations-Queries)

`collateral`
------------

##### Response

Returns a [`Collateral`](#definition-Collateral)

##### Arguments

Name

Description

`where` - [`ActionWhereInput`](#definition-ActionWhereInput)

#### Example

##### Query

    query Collateral($where: ActionWhereInput) {
      collateral(where: $where) {
        id
        assets {
          id
          type
          usdValue
          content {
            ...ContentFragment
          }
          collateral {
            ...CollateralFragment
          }
          addresses {
            ...AddressFragment
          }
          action {
            ...ActionFragment
          }
        }
        escrow {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
      }
    }

##### Variables

    {"where": ActionWhereInput}

##### Response

    {
      "data": {
        "collateral": {
          "id": "xyz789",
          "assets": [Asset],
          "escrow": Escrow
        }
      }
    }

[Queries](#group-Operations-Queries)

`collaterals`
-------------

##### Response

Returns an [`Actions`](#definition-Actions)

##### Arguments

Name

Description

`where` - [`CollateralWhereInput`](#definition-CollateralWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`CollateralWhereInput`](#definition-CollateralWhereInput)

`lt` - [`ActionWhereInput`](#definition-ActionWhereInput)

`like` - [`ActionWhereInput`](#definition-ActionWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Collaterals(
      $where: CollateralWhereInput,
      $take: Int,
      $skip: Int,
      $gt: CollateralWhereInput,
      $lt: ActionWhereInput,
      $like: ActionWhereInput,
      $orderBy: [JSONObject]
    ) {
      collaterals(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          type
          configuration
        }
        count
      }
    }

##### Variables

    {
      "where": CollateralWhereInput,
      "take": 987,
      "skip": 123,
      "gt": CollateralWhereInput,
      "lt": ActionWhereInput,
      "like": ActionWhereInput,
      "orderBy": [{}]
    }

##### Response

    {
      "data": {
        "collaterals": {"data": [Action], "count": 987}
      }
    }

[Queries](#group-Operations-Queries)

`element`
---------

##### Response

Returns an [`Element`](#definition-Element)

##### Arguments

Name

Description

`where` - [`ElementWhereInput`](#definition-ElementWhereInput)

#### Example

##### Query

    query Element($where: ElementWhereInput) {
      element(where: $where) {
        id
        number
        sequence
        type
        externalId
      }
    }

##### Variables

    {"where": ElementWhereInput}

##### Response

    {
      "data": {
        "element": {
          "id": "abc123",
          "number": "abc123",
          "sequence": "xyz789",
          "type": "abc123",
          "externalId": "xyz789"
        }
      }
    }

[Queries](#group-Operations-Queries)

`elements`
----------

##### Response

Returns an [`Elements`](#definition-Elements)

##### Arguments

Name

Description

`where` - [`ElementWhereInput`](#definition-ElementWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`ElementWhereInput`](#definition-ElementWhereInput)

`lt` - [`ElementWhereInput`](#definition-ElementWhereInput)

`like` - [`ElementWhereInput`](#definition-ElementWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Elements(
      $where: ElementWhereInput,
      $take: Int,
      $skip: Int,
      $gt: ElementWhereInput,
      $lt: ElementWhereInput,
      $like: ElementWhereInput,
      $orderBy: [JSONObject]
    ) {
      elements(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          number
          sequence
          type
          externalId
        }
        count
      }
    }

##### Variables

    {
      "where": ElementWhereInput,
      "take": 987,
      "skip": 123,
      "gt": ElementWhereInput,
      "lt": ElementWhereInput,
      "like": ElementWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"elements": {"data": [Element], "count": 987}}}

[Queries](#group-Operations-Queries)

`escrow`
--------

##### Response

Returns an [`Escrow`](#definition-Escrow)

##### Arguments

Name

Description

`where` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

#### Example

##### Query

    query Escrow($where: EscrowWhereInput) {
      escrow(where: $where) {
        id
        startDate
        endDate
        status
        collateral {
          id
          assets {
            ...AssetFragment
          }
          escrow {
            ...EscrowFragment
          }
        }
        meta
        transactions {
          id
          hex
          type
          base64
          txid
          inputs
          outputs
        }
        sides {
          id
          movement
          action
          leaf
        }
        product {
          id
          name
          type
          key {
            ...KeyFragment
          }
        }
      }
    }

##### Variables

    {"where": EscrowWhereInput}

##### Response

    {
      "data": {
        "escrow": {
          "id": "xyz789",
          "startDate": "abc123",
          "endDate": "xyz789",
          "status": "abc123",
          "collateral": Collateral,
          "meta": {},
          "transactions": [Transaction],
          "sides": [Side],
          "product": Product
        }
      }
    }

[Queries](#group-Operations-Queries)

`escrows`
---------

##### Response

Returns an [`Escrows`](#definition-Escrows)

##### Arguments

Name

Description

`where` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

`lt` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

`like` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Escrows(
      $where: EscrowWhereInput,
      $take: Int,
      $skip: Int,
      $gt: EscrowWhereInput,
      $lt: EscrowWhereInput,
      $like: EscrowWhereInput,
      $orderBy: [JSONObject]
    ) {
      escrows(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
        count
      }
    }

##### Variables

    {
      "where": EscrowWhereInput,
      "take": 987,
      "skip": 987,
      "gt": EscrowWhereInput,
      "lt": EscrowWhereInput,
      "like": EscrowWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"escrows": {"data": [Escrow], "count": 987}}}

[Queries](#group-Operations-Queries)

`fee`
-----

##### Response

Returns a [`Fee`](#definition-Fee)

##### Arguments

Name

Description

`where` - [`FeeWhereInput`](#definition-FeeWhereInput)

#### Example

##### Query

    query Fee($where: FeeWhereInput) {
      fee(where: $where) {
        value
        escrow {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
      }
    }

##### Variables

    {"where": FeeWhereInput}

##### Response

    {
      "data": {
        "fee": {
          "value": "xyz789",
          "escrow": Escrow
        }
      }
    }

[Queries](#group-Operations-Queries)

`flow`
------

##### Response

Returns a [`Flow`](#definition-Flow)

##### Arguments

Name

Description

`where` - [`FlowWhereInput`](#definition-FlowWhereInput)

#### Example

##### Query

    query Flow($where: FlowWhereInput) {
      flow(where: $where) {
        id
        escrows {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
        step
      }
    }

##### Variables

    {"where": FlowWhereInput}

##### Response

    {
      "data": {
        "flow": {
          "id": "xyz789",
          "escrows": [Escrow],
          "step": {}
        }
      }
    }

[Queries](#group-Operations-Queries)

`flows`
-------

##### Response

Returns a [`Flows`](#definition-Flows)

##### Arguments

Name

Description

`where` - [`FlowWhereInput`](#definition-FlowWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`FlowWhereInput`](#definition-FlowWhereInput)

`lt` - [`FlowWhereInput`](#definition-FlowWhereInput)

`like` - [`FlowWhereInput`](#definition-FlowWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Flows(
      $where: FlowWhereInput,
      $take: Int,
      $skip: Int,
      $gt: FlowWhereInput,
      $lt: FlowWhereInput,
      $like: FlowWhereInput,
      $orderBy: [JSONObject]
    ) {
      flows(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          escrows {
            ...EscrowFragment
          }
          step
        }
        count
      }
    }

##### Variables

    {
      "where": FlowWhereInput,
      "take": 123,
      "skip": 123,
      "gt": FlowWhereInput,
      "lt": FlowWhereInput,
      "like": FlowWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"flows": {"data": [Flow], "count": 123}}}

[Queries](#group-Operations-Queries)

`leg`
-----

##### Response

Returns a [`Leg`](#definition-Leg)

##### Arguments

Name

Description

`where` - [`LegWhereInput`](#definition-LegWhereInput)

#### Example

##### Query

    query Leg($where: LegWhereInput) {
      leg(where: $where) {
        id
        startDate
        endDate
        type
        nature
        activationDate
        address
        value
      }
    }

##### Variables

    {"where": LegWhereInput}

##### Response

    {
      "data": {
        "leg": {
          "id": "abc123",
          "startDate": "abc123",
          "endDate": "abc123",
          "type": "abc123",
          "nature": "abc123",
          "activationDate": "abc123",
          "address": "abc123",
          "value": "xyz789"
        }
      }
    }

[Queries](#group-Operations-Queries)

`legs`
------

##### Response

Returns a [`Legs`](#definition-Legs)

##### Arguments

Name

Description

`where` - [`LegWhereInput`](#definition-LegWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`LegWhereInput`](#definition-LegWhereInput)

`lt` - [`LegWhereInput`](#definition-LegWhereInput)

`like` - [`LegWhereInput`](#definition-LegWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Legs(
      $where: LegWhereInput,
      $take: Int,
      $skip: Int,
      $gt: LegWhereInput,
      $lt: LegWhereInput,
      $like: LegWhereInput,
      $orderBy: [JSONObject]
    ) {
      legs(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          startDate
          endDate
          type
          nature
          activationDate
          address
          value
        }
        count
      }
    }

##### Variables

    {
      "where": LegWhereInput,
      "take": 123,
      "skip": 987,
      "gt": LegWhereInput,
      "lt": LegWhereInput,
      "like": LegWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"legs": {"data": [Leg], "count": 123}}}

[Queries](#group-Operations-Queries)

`outcome`
---------

##### Response

Returns an [`Outcome`](#definition-Outcome)

##### Arguments

Name

Description

`where` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

#### Example

##### Query

    query Outcome($where: OutcomeWhereInput) {
      outcome(where: $where) {
        id
        description
        tag
        conditions {
          id
          filter
          module
          outcome {
            ...OutcomeFragment
          }
          transaction {
            ...TransactionFragment
          }
          verification {
            ...VerificationFragment
          }
        }
        signature {
          publicKey
          wif
        }
        block {
          id
          indexed
        }
      }
    }

##### Variables

    {"where": OutcomeWhereInput}

##### Response

    {
      "data": {
        "outcome": {
          "id": "xyz789",
          "description": "abc123",
          "tag": "abc123",
          "conditions": [Condition],
          "signature": Signature,
          "block": Block
        }
      }
    }

[Queries](#group-Operations-Queries)

`outcomes`
----------

##### Response

Returns an [`Outcomes`](#definition-Outcomes)

##### Arguments

Name

Description

`where` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

`lt` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

`like` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Outcomes(
      $where: OutcomeWhereInput,
      $take: Int,
      $skip: Int,
      $gt: OutcomeWhereInput,
      $lt: OutcomeWhereInput,
      $like: OutcomeWhereInput,
      $orderBy: [JSONObject]
    ) {
      outcomes(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          description
          tag
          conditions {
            ...ConditionFragment
          }
          signature {
            ...SignatureFragment
          }
          block {
            ...BlockFragment
          }
        }
        count
      }
    }

##### Variables

    {
      "where": OutcomeWhereInput,
      "take": 123,
      "skip": 987,
      "gt": OutcomeWhereInput,
      "lt": OutcomeWhereInput,
      "like": OutcomeWhereInput,
      "orderBy": [{}]
    }

##### Response

    {"data": {"outcomes": {"data": [Outcome], "count": 123}}}

[Queries](#group-Operations-Queries)

`transaction`
-------------

##### Response

Returns a [`Transaction`](#definition-Transaction)

##### Arguments

Name

Description

`where` - [`TransactionWhereInput`](#definition-TransactionWhereInput)

#### Example

##### Query

    query Transaction($where: TransactionWhereInput) {
      transaction(where: $where) {
        id
        hex
        type
        base64
        txid
        inputs
        outputs
      }
    }

##### Variables

    {"where": TransactionWhereInput}

##### Response

    {
      "data": {
        "transaction": {
          "id": "xyz789",
          "hex": "xyz789",
          "type": "abc123",
          "base64": "xyz789",
          "txid": "xyz789",
          "inputs": 123,
          "outputs": 123
        }
      }
    }

[Queries](#group-Operations-Queries)

`transactions`
--------------

##### Response

Returns a [`Transactions`](#definition-Transactions)

##### Arguments

Name

Description

`where` - [`TransactionWhereInput`](#definition-TransactionWhereInput)

`take` - [`Int`](#definition-Int)

`skip` - [`Int`](#definition-Int)

`gt` - [`TransactionWhereInput`](#definition-TransactionWhereInput)

`lt` - [`TransactionWhereInput`](#definition-TransactionWhereInput)

`like` - [`TransactionWhereInput`](#definition-TransactionWhereInput)

`orderBy` - [`[JSONObject]`](#definition-JSONObject)

#### Example

##### Query

    query Transactions(
      $where: TransactionWhereInput,
      $take: Int,
      $skip: Int,
      $gt: TransactionWhereInput,
      $lt: TransactionWhereInput,
      $like: TransactionWhereInput,
      $orderBy: [JSONObject]
    ) {
      transactions(
        where: $where,
        take: $take,
        skip: $skip,
        gt: $gt,
        lt: $lt,
        like: $like,
        orderBy: $orderBy
      ) {
        data {
          id
          hex
          type
          base64
          txid
          inputs
          outputs
        }
        count
      }
    }

##### Variables

    {
      "where": TransactionWhereInput,
      "take": 987,
      "skip": 987,
      "gt": TransactionWhereInput,
      "lt": TransactionWhereInput,
      "like": TransactionWhereInput,
      "orderBy": [{}]
    }

##### Response

    {
      "data": {
        "transactions": {"data": [Transaction], "count": 987}
      }
    }

[Queries](#group-Operations-Queries)

`tvl`
-----

##### Response

Returns a [`Liquidity`](#definition-Liquidity)

##### Arguments

Name

Description

`where` - [`LiquidityWhereInput`](#definition-LiquidityWhereInput)

`lt` - [`LiquidityWhereInput`](#definition-LiquidityWhereInput)

#### Example

##### Query

    query Tvl(
      $where: LiquidityWhereInput,
      $lt: LiquidityWhereInput
    ) {
      tvl(
        where: $where,
        lt: $lt
      ) {
        id
        amount
        escrow {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
        organization {
          id
          name
          logo
          webhooks {
            ...WebhookFragment
          }
        }
      }
    }

##### Variables

    {
      "where": LiquidityWhereInput,
      "lt": LiquidityWhereInput
    }

##### Response

    {
      "data": {
        "tvl": {
          "id": 123,
          "amount": "xyz789",
          "escrow": Escrow,
          "organization": Organization
        }
      }
    }

[Queries](#group-Operations-Queries)

Mutations
=========

[Mutations](#group-Operations-Mutations)

`broadcastEscrow`
-----------------

##### Response

Returns an [`Escrow`](#definition-Escrow)

##### Arguments

Name

Description

`data` - [`EscrowDataInput`](#definition-EscrowDataInput)

#### Example

##### Query

    mutation BroadcastEscrow($data: EscrowDataInput) {
      broadcastEscrow(data: $data) {
        id
        startDate
        endDate
        status
        collateral {
          id
          assets {
            ...AssetFragment
          }
          escrow {
            ...EscrowFragment
          }
        }
        meta
        transactions {
          id
          hex
          type
          base64
          txid
          inputs
          outputs
        }
        sides {
          id
          movement
          action
          leaf
        }
        product {
          id
          name
          type
          key {
            ...KeyFragment
          }
        }
      }
    }

##### Variables

    {"data": EscrowDataInput}

##### Response

    {
      "data": {
        "broadcastEscrow": {
          "id": "xyz789",
          "startDate": "xyz789",
          "endDate": "xyz789",
          "status": "abc123",
          "collateral": Collateral,
          "meta": {},
          "transactions": [Transaction],
          "sides": [Side],
          "product": Product
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`buildSignature`
----------------

##### Response

Returns a [`Signature`](#definition-Signature)

##### Arguments

Name

Description

`where` - [`SignatureWhereInput`](#definition-SignatureWhereInput)

#### Example

##### Query

    mutation BuildSignature($where: SignatureWhereInput) {
      buildSignature(where: $where) {
        publicKey
        wif
      }
    }

##### Variables

    {"where": SignatureWhereInput}

##### Response

    {
      "data": {
        "buildSignature": {
          "publicKey": "xyz789",
          "wif": "xyz789"
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`checkOutcome`
--------------

##### Response

Returns an [`Outcome`](#definition-Outcome)

##### Arguments

Name

Description

`where` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

#### Example

##### Query

    mutation CheckOutcome($where: OutcomeWhereInput) {
      checkOutcome(where: $where) {
        id
        description
        tag
        conditions {
          id
          filter
          module
          outcome {
            ...OutcomeFragment
          }
          transaction {
            ...TransactionFragment
          }
          verification {
            ...VerificationFragment
          }
        }
        signature {
          publicKey
          wif
        }
        block {
          id
          indexed
        }
      }
    }

##### Variables

    {"where": OutcomeWhereInput}

##### Response

    {
      "data": {
        "checkOutcome": {
          "id": "xyz789",
          "description": "xyz789",
          "tag": "abc123",
          "conditions": [Condition],
          "signature": Signature,
          "block": Block
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`createAddress`
---------------

##### Response

Returns an [`Address`](#definition-Address)

##### Arguments

Name

Description

`data` - [`AddressDataInput`](#definition-AddressDataInput)

#### Example

##### Query

    mutation CreateAddress($data: AddressDataInput) {
      createAddress(data: $data) {
        id
        value
        publicKey
        type
        meta
        escrow {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
      }
    }

##### Variables

    {"data": AddressDataInput}

##### Response

    {
      "data": {
        "createAddress": {
          "id": "xyz789",
          "value": "abc123",
          "publicKey": "abc123",
          "type": "abc123",
          "meta": {},
          "escrow": Escrow
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`createAsset`
-------------

##### Response

Returns an [`Asset`](#definition-Asset)

##### Arguments

Name

Description

`data` - [`AssetDataInput`](#definition-AssetDataInput)

#### Example

##### Query

    mutation CreateAsset($data: AssetDataInput) {
      createAsset(data: $data) {
        id
        type
        usdValue
        content {
          meta
          node
        }
        collateral {
          id
          assets {
            ...AssetFragment
          }
          escrow {
            ...EscrowFragment
          }
        }
        addresses {
          id
          value
          publicKey
          type
          meta
          escrow {
            ...EscrowFragment
          }
        }
        action {
          id
          type
          configuration
        }
      }
    }

##### Variables

    {"data": AssetDataInput}

##### Response

    {
      "data": {
        "createAsset": {
          "id": "abc123",
          "type": "abc123",
          "usdValue": "abc123",
          "content": Content,
          "collateral": Collateral,
          "addresses": [Address],
          "action": Action
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`createCollateral`
------------------

##### Response

Returns a [`Collateral`](#definition-Collateral)

##### Arguments

Name

Description

`data` - [`CollateralDataInput`](#definition-CollateralDataInput)

#### Example

##### Query

    mutation CreateCollateral($data: CollateralDataInput) {
      createCollateral(data: $data) {
        id
        assets {
          id
          type
          usdValue
          content {
            ...ContentFragment
          }
          collateral {
            ...CollateralFragment
          }
          addresses {
            ...AddressFragment
          }
          action {
            ...ActionFragment
          }
        }
        escrow {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
      }
    }

##### Variables

    {"data": CollateralDataInput}

##### Response

    {
      "data": {
        "createCollateral": {
          "id": "abc123",
          "assets": [Asset],
          "escrow": Escrow
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`createElement`
---------------

##### Response

Returns an [`Element`](#definition-Element)

##### Arguments

Name

Description

`data` - [`ElementDataInput`](#definition-ElementDataInput)

#### Example

##### Query

    mutation CreateElement($data: ElementDataInput) {
      createElement(data: $data) {
        id
        number
        sequence
        type
        externalId
      }
    }

##### Variables

    {"data": ElementDataInput}

##### Response

    {
      "data": {
        "createElement": {
          "id": "abc123",
          "number": "xyz789",
          "sequence": "xyz789",
          "type": "xyz789",
          "externalId": "abc123"
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`createEscrow`
--------------

##### Response

Returns an [`Escrow`](#definition-Escrow)

##### Arguments

Name

Description

`data` - [`EscrowDataInput`](#definition-EscrowDataInput)

#### Example

##### Query

    mutation CreateEscrow($data: EscrowDataInput) {
      createEscrow(data: $data) {
        id
        startDate
        endDate
        status
        collateral {
          id
          assets {
            ...AssetFragment
          }
          escrow {
            ...EscrowFragment
          }
        }
        meta
        transactions {
          id
          hex
          type
          base64
          txid
          inputs
          outputs
        }
        sides {
          id
          movement
          action
          leaf
        }
        product {
          id
          name
          type
          key {
            ...KeyFragment
          }
        }
      }
    }

##### Variables

    {"data": EscrowDataInput}

##### Response

    {
      "data": {
        "createEscrow": {
          "id": "xyz789",
          "startDate": "abc123",
          "endDate": "abc123",
          "status": "abc123",
          "collateral": Collateral,
          "meta": {},
          "transactions": [Transaction],
          "sides": [Side],
          "product": Product
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`createOutcome`
---------------

##### Response

Returns an [`Outcome`](#definition-Outcome)

##### Arguments

Name

Description

`data` - [`OutcomeDataInput`](#definition-OutcomeDataInput)

#### Example

##### Query

    mutation CreateOutcome($data: OutcomeDataInput) {
      createOutcome(data: $data) {
        id
        description
        tag
        conditions {
          id
          filter
          module
          outcome {
            ...OutcomeFragment
          }
          transaction {
            ...TransactionFragment
          }
          verification {
            ...VerificationFragment
          }
        }
        signature {
          publicKey
          wif
        }
        block {
          id
          indexed
        }
      }
    }

##### Variables

    {"data": OutcomeDataInput}

##### Response

    {
      "data": {
        "createOutcome": {
          "id": "abc123",
          "description": "abc123",
          "tag": "abc123",
          "conditions": [Condition],
          "signature": Signature,
          "block": Block
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`executeAction`
---------------

##### Response

Returns an [`Action`](#definition-Action)

##### Arguments

Name

Description

`where` - [`ActionWhereInput`](#definition-ActionWhereInput)

#### Example

##### Query

    mutation ExecuteAction($where: ActionWhereInput) {
      executeAction(where: $where) {
        id
        type
        configuration
      }
    }

##### Variables

    {"where": ActionWhereInput}

##### Response

    {
      "data": {
        "executeAction": {
          "id": "xyz789",
          "type": "abc123",
          "configuration": {}
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`executeEscrow`
---------------

##### Response

Returns an [`Escrow`](#definition-Escrow)

##### Arguments

Name

Description

`where` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

#### Example

##### Query

    mutation ExecuteEscrow($where: EscrowWhereInput) {
      executeEscrow(where: $where) {
        id
        startDate
        endDate
        status
        collateral {
          id
          assets {
            ...AssetFragment
          }
          escrow {
            ...EscrowFragment
          }
        }
        meta
        transactions {
          id
          hex
          type
          base64
          txid
          inputs
          outputs
        }
        sides {
          id
          movement
          action
          leaf
        }
        product {
          id
          name
          type
          key {
            ...KeyFragment
          }
        }
      }
    }

##### Variables

    {"where": EscrowWhereInput}

##### Response

    {
      "data": {
        "executeEscrow": {
          "id": "xyz789",
          "startDate": "abc123",
          "endDate": "xyz789",
          "status": "xyz789",
          "collateral": Collateral,
          "meta": {},
          "transactions": [Transaction],
          "sides": [Side],
          "product": Product
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`executeFlow`
-------------

##### Response

Returns a [`Flow`](#definition-Flow)

##### Arguments

Name

Description

`where` - [`JSONObject`](#definition-JSONObject)

`data` - [`JSONObject`](#definition-JSONObject)

#### Example

##### Query

    mutation ExecuteFlow(
      $where: JSONObject,
      $data: JSONObject
    ) {
      executeFlow(
        where: $where,
        data: $data
      ) {
        id
        escrows {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
        step
      }
    }

##### Variables

    {"where": {}, "data": {}}

##### Response

    {
      "data": {
        "executeFlow": {
          "id": "abc123",
          "escrows": [Escrow],
          "step": {}
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`executeSignature`
------------------

##### Response

Returns a [`Signature`](#definition-Signature)

##### Arguments

Name

Description

`where` - [`SignatureWhereInput`](#definition-SignatureWhereInput)

`data` - [`SignatureDataInput`](#definition-SignatureDataInput)

#### Example

##### Query

    mutation ExecuteSignature(
      $where: SignatureWhereInput,
      $data: SignatureDataInput
    ) {
      executeSignature(
        where: $where,
        data: $data
      ) {
        publicKey
        wif
      }
    }

##### Variables

    {
      "where": SignatureWhereInput,
      "data": SignatureDataInput
    }

##### Response

    {
      "data": {
        "executeSignature": {
          "publicKey": "abc123",
          "wif": "abc123"
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`sign`
------

##### Response

Returns an [`Outcome`](#definition-Outcome)

##### Arguments

Name

Description

`where` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

#### Example

##### Query

    mutation Sign($where: OutcomeWhereInput) {
      sign(where: $where) {
        id
        description
        tag
        conditions {
          id
          filter
          module
          outcome {
            ...OutcomeFragment
          }
          transaction {
            ...TransactionFragment
          }
          verification {
            ...VerificationFragment
          }
        }
        signature {
          publicKey
          wif
        }
        block {
          id
          indexed
        }
      }
    }

##### Variables

    {"where": OutcomeWhereInput}

##### Response

    {
      "data": {
        "sign": {
          "id": "xyz789",
          "description": "xyz789",
          "tag": "xyz789",
          "conditions": [Condition],
          "signature": Signature,
          "block": Block
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`updateAddress`
---------------

##### Response

Returns an [`Address`](#definition-Address)

##### Arguments

Name

Description

`data` - [`AddressDataInput`](#definition-AddressDataInput)

`where` - [`AddressWhereInput`](#definition-AddressWhereInput)

#### Example

##### Query

    mutation UpdateAddress(
      $data: AddressDataInput,
      $where: AddressWhereInput
    ) {
      updateAddress(
        data: $data,
        where: $where
      ) {
        id
        value
        publicKey
        type
        meta
        escrow {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
      }
    }

##### Variables

    {
      "data": AddressDataInput,
      "where": AddressWhereInput
    }

##### Response

    {
      "data": {
        "updateAddress": {
          "id": "abc123",
          "value": "abc123",
          "publicKey": "abc123",
          "type": "abc123",
          "meta": {},
          "escrow": Escrow
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`updateAsset`
-------------

##### Response

Returns an [`Asset`](#definition-Asset)

##### Arguments

Name

Description

`data` - [`AssetDataInput`](#definition-AssetDataInput)

`where` - [`AssetWhereInput`](#definition-AssetWhereInput)

#### Example

##### Query

    mutation UpdateAsset(
      $data: AssetDataInput,
      $where: AssetWhereInput
    ) {
      updateAsset(
        data: $data,
        where: $where
      ) {
        id
        type
        usdValue
        content {
          meta
          node
        }
        collateral {
          id
          assets {
            ...AssetFragment
          }
          escrow {
            ...EscrowFragment
          }
        }
        addresses {
          id
          value
          publicKey
          type
          meta
          escrow {
            ...EscrowFragment
          }
        }
        action {
          id
          type
          configuration
        }
      }
    }

##### Variables

    {
      "data": AssetDataInput,
      "where": AssetWhereInput
    }

##### Response

    {
      "data": {
        "updateAsset": {
          "id": "xyz789",
          "type": "xyz789",
          "usdValue": "abc123",
          "content": Content,
          "collateral": Collateral,
          "addresses": [Address],
          "action": Action
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`updateCollateral`
------------------

##### Response

Returns a [`Collateral`](#definition-Collateral)

##### Arguments

Name

Description

`where` - [`CollateralWhereInput`](#definition-CollateralWhereInput)

`data` - [`CollateralDataInput`](#definition-CollateralDataInput)

#### Example

##### Query

    mutation UpdateCollateral(
      $where: CollateralWhereInput,
      $data: CollateralDataInput
    ) {
      updateCollateral(
        where: $where,
        data: $data
      ) {
        id
        assets {
          id
          type
          usdValue
          content {
            ...ContentFragment
          }
          collateral {
            ...CollateralFragment
          }
          addresses {
            ...AddressFragment
          }
          action {
            ...ActionFragment
          }
        }
        escrow {
          id
          startDate
          endDate
          status
          collateral {
            ...CollateralFragment
          }
          meta
          transactions {
            ...TransactionFragment
          }
          sides {
            ...SideFragment
          }
          product {
            ...ProductFragment
          }
        }
      }
    }

##### Variables

    {
      "where": CollateralWhereInput,
      "data": CollateralDataInput
    }

##### Response

    {
      "data": {
        "updateCollateral": {
          "id": "xyz789",
          "assets": [Asset],
          "escrow": Escrow
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`updateElement`
---------------

##### Response

Returns an [`Element`](#definition-Element)

##### Arguments

Name

Description

`where` - [`ElementWhereInput`](#definition-ElementWhereInput)

`data` - [`ElementDataInput`](#definition-ElementDataInput)

#### Example

##### Query

    mutation UpdateElement(
      $where: ElementWhereInput,
      $data: ElementDataInput
    ) {
      updateElement(
        where: $where,
        data: $data
      ) {
        id
        number
        sequence
        type
        externalId
      }
    }

##### Variables

    {
      "where": ElementWhereInput,
      "data": ElementDataInput
    }

##### Response

    {
      "data": {
        "updateElement": {
          "id": "abc123",
          "number": "abc123",
          "sequence": "abc123",
          "type": "abc123",
          "externalId": "xyz789"
        }
      }
    }

[Mutations](#group-Operations-Mutations)

`updateTransaction`
-------------------

##### Response

Returns a [`Transaction`](#definition-Transaction)

##### Arguments

Name

Description

`where` - [`TransactionWhereInput`](#definition-TransactionWhereInput)

`data` - [`TransactionDataInput`](#definition-TransactionDataInput)

#### Example

##### Query

    mutation UpdateTransaction(
      $where: TransactionWhereInput,
      $data: TransactionDataInput
    ) {
      updateTransaction(
        where: $where,
        data: $data
      ) {
        id
        hex
        type
        base64
        txid
        inputs
        outputs
      }
    }

##### Variables

    {
      "where": TransactionWhereInput,
      "data": TransactionDataInput
    }

##### Response

    {
      "data": {
        "updateTransaction": {
          "id": "abc123",
          "hex": "xyz789",
          "type": "abc123",
          "base64": "abc123",
          "txid": "abc123",
          "inputs": 123,
          "outputs": 987
        }
      }
    }

[Mutations](#group-Operations-Mutations)

Subscriptions
=============

`balanceUpdated`
----------------

##### Response

Returns an [`Account`](#definition-Account)

##### Arguments

Name

Description

`where` - [`AccountWhereInput`](#definition-AccountWhereInput)

#### Example

##### Query

    subscription BalanceUpdated($where: AccountWhereInput) {
      balanceUpdated(where: $where) {
        id
        wallet
        debit
        credit
      }
    }

##### Variables

    {"where": AccountWhereInput}

##### Response

    {
      "data": {
        "balanceUpdated": {
          "id": "abc123",
          "wallet": "abc123",
          "debit": "xyz789",
          "credit": "xyz789"
        }
      }
    }

Types
=====

Account
-------

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`wallet` - [`String`](#definition-String)

`debit` - [`String`](#definition-String)

`credit` - [`String`](#definition-String)

##### Example

    {
      "id": "abc123",
      "wallet": "abc123",
      "debit": "abc123",
      "credit": "abc123"
    }

[Types](#group-Types)

AccountWhereInput
-----------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`wallet` - [`String`](#definition-String)

##### Example

    {
      "id": "xyz789",
      "wallet": "xyz789"
    }

[Types](#group-Types)

Action
------

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`type` - [`String`](#definition-String)

`configuration` - [`JSONObject`](#definition-JSONObject)

##### Example

    {
      "id": "abc123",
      "type": "xyz789",
      "configuration": {}
    }

[Types](#group-Types)

ActionDataInput
---------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`configuration` - [`JSONObject`](#definition-JSONObject)

##### Example

    {
      "id": "xyz789",
      "type": "xyz789",
      "configuration": {}
    }

[Types](#group-Types)

ActionWhereInput
----------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`configuration` - [`JSONObject`](#definition-JSONObject)

##### Example

    {
      "id": "abc123",
      "type": "abc123",
      "configuration": {}
    }

[Types](#group-Types)

Actions
-------

##### Fields

Field Name

Description

`data` - [`[Action]`](#definition-Action)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Action], "count": 987}

[Types](#group-Types)

Address
-------

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`value` - [`String`](#definition-String)

`publicKey` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`meta` - [`JSONObject`](#definition-JSONObject)

`escrow` - [`Escrow`](#definition-Escrow)

##### Example

    {
      "id": "abc123",
      "value": "abc123",
      "publicKey": "abc123",
      "type": "xyz789",
      "meta": {},
      "escrow": Escrow
    }

[Types](#group-Types)

AddressDataInput
----------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`value` - [`String`](#definition-String)

`publicKey` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`meta` - [`JSONObject`](#definition-JSONObject)

`escrow` - [`EscrowDataInput`](#definition-EscrowDataInput)

##### Example

    {
      "id": "xyz789",
      "value": "xyz789",
      "publicKey": "abc123",
      "type": "xyz789",
      "meta": {},
      "escrow": EscrowDataInput
    }

[Types](#group-Types)

AddressWhereInput
-----------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`value` - [`String`](#definition-String)

`publicKey` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`meta` - [`JSONObject`](#definition-JSONObject)

`escrow` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

##### Example

    {
      "id": "abc123",
      "value": "xyz789",
      "publicKey": "abc123",
      "type": "xyz789",
      "meta": {},
      "escrow": EscrowWhereInput
    }

[Types](#group-Types)

Addresses
---------

##### Fields

Field Name

Description

`data` - [`[Address]`](#definition-Address)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Address], "count": 123}

[Types](#group-Types)

Asset
-----

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`type` - [`String`](#definition-String)

`usdValue` - [`String`](#definition-String)

`content` - [`Content`](#definition-Content)

`collateral` - [`Collateral`](#definition-Collateral)

`addresses` - [`[Address]`](#definition-Address)

`action` - [`Action`](#definition-Action)

##### Example

    {
      "id": "xyz789",
      "type": "xyz789",
      "usdValue": "abc123",
      "content": Content,
      "collateral": Collateral,
      "addresses": [Address],
      "action": Action
    }

[Types](#group-Types)

AssetDataInput
--------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`usdValue` - [`String`](#definition-String)

`content` - [`ContentDataInput`](#definition-ContentDataInput)

`collateral` - [`CollateralDataInput`](#definition-CollateralDataInput)

`addresses` - [`[AddressDataInput]`](#definition-AddressDataInput)

`action` - [`ActionDataInput`](#definition-ActionDataInput)

##### Example

    {
      "id": "xyz789",
      "type": "abc123",
      "usdValue": "abc123",
      "content": ContentDataInput,
      "collateral": CollateralDataInput,
      "addresses": [AddressDataInput],
      "action": ActionDataInput
    }

[Types](#group-Types)

AssetWhereInput
---------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`usdValue` - [`String`](#definition-String)

`content` - [`ContentWhereInput`](#definition-ContentWhereInput)

`collateral` - [`CollateralWhereInput`](#definition-CollateralWhereInput)

`addresses` - [`[AddressWhereInput]`](#definition-AddressWhereInput)

`action` - [`ActionWhereInput`](#definition-ActionWhereInput)

##### Example

    {
      "id": "abc123",
      "type": "xyz789",
      "usdValue": "abc123",
      "content": ContentWhereInput,
      "collateral": CollateralWhereInput,
      "addresses": [AddressWhereInput],
      "action": ActionWhereInput
    }

[Types](#group-Types)

Assets
------

##### Fields

Field Name

Description

`data` - [`[Asset]`](#definition-Asset)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Asset], "count": 123}

[Types](#group-Types)

Block
-----

##### Fields

Field Name

Description

`id` - [`String`](#definition-String)

`indexed` - [`Boolean`](#definition-Boolean)

##### Example

    {"id": "abc123", "indexed": true}

[Types](#group-Types)

BlockWhereInput
---------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`indexed` - [`Boolean`](#definition-Boolean)

##### Example

    {"id": "xyz789", "indexed": false}

[Types](#group-Types)

Blocks
------

##### Fields

Field Name

Description

`data` - [`[Block]`](#definition-Block)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Block], "count": 123}

[Types](#group-Types)

Boolean
-------

##### Description

The `Boolean` scalar type represents `true` or `false`.

##### Example

    true

[Types](#group-Types)

Collateral
----------

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`assets` - [`[Asset]`](#definition-Asset)

`escrow` - [`Escrow`](#definition-Escrow)

##### Example

    {
      "id": "xyz789",
      "assets": [Asset],
      "escrow": Escrow
    }

[Types](#group-Types)

CollateralDataInput
-------------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`assets` - [`[AssetDataInput]`](#definition-AssetDataInput)

`escrow` - [`EscrowDataInput`](#definition-EscrowDataInput)

##### Example

    {
      "id": "abc123",
      "assets": [AssetDataInput],
      "escrow": EscrowDataInput
    }

[Types](#group-Types)

CollateralWhereInput
--------------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`assets` - [`[AssetWhereInput]`](#definition-AssetWhereInput)

`escrow` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

##### Example

    {
      "id": "abc123",
      "assets": [AssetWhereInput],
      "escrow": EscrowWhereInput
    }

[Types](#group-Types)

Condition
---------

##### Fields

Field Name

Description

`id` - [`ID`](#definition-ID)

`filter` - [`JSONObject`](#definition-JSONObject)

`module` - [`String`](#definition-String)

`outcome` - [`Outcome`](#definition-Outcome)

`transaction` - [`Transaction`](#definition-Transaction)

`verification` - [`Verification`](#definition-Verification)

##### Example

    {
      "id": "4",
      "filter": {},
      "module": "xyz789",
      "outcome": Outcome,
      "transaction": Transaction,
      "verification": Verification
    }

[Types](#group-Types)

ConditionDataInput
------------------

##### Fields

Input Field

Description

`id` - [`ID`](#definition-ID)

`filter` - [`JSONObject`](#definition-JSONObject)

`module` - [`String`](#definition-String)

`outcome` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

`transaction` - [`TransactionDataInput`](#definition-TransactionDataInput)

`verification` - [`VerificationDataInput`](#definition-VerificationDataInput)

##### Example

    {
      "id": "4",
      "filter": {},
      "module": "abc123",
      "outcome": OutcomeWhereInput,
      "transaction": TransactionDataInput,
      "verification": VerificationDataInput
    }

[Types](#group-Types)

ConditionWhereInput
-------------------

##### Fields

Input Field

Description

`id` - [`ID`](#definition-ID)

`filter` - [`JSONObject`](#definition-JSONObject)

`module` - [`String`](#definition-String)

`outcome` - [`OutcomeWhereInput`](#definition-OutcomeWhereInput)

`verification` - [`VerificationWhereInput`](#definition-VerificationWhereInput)

##### Example

    {
      "id": "4",
      "filter": {},
      "module": "xyz789",
      "outcome": OutcomeWhereInput,
      "verification": VerificationWhereInput
    }

[Types](#group-Types)

Content
-------

##### Fields

Field Name

Description

`meta` - [`JSONObject`](#definition-JSONObject)

`node` - [`JSONObject`](#definition-JSONObject)

##### Example

    {"meta": {}, "node": {}}

[Types](#group-Types)

ContentDataInput
----------------

##### Fields

Input Field

Description

`meta` - [`JSONObject`](#definition-JSONObject)

`node` - [`JSONObject`](#definition-JSONObject)

##### Example

    {"meta": {}, "node": {}}

[Types](#group-Types)

ContentWhereInput
-----------------

##### Fields

Input Field

Description

`meta` - [`JSONObject`](#definition-JSONObject)

`node` - [`JSONObject`](#definition-JSONObject)

##### Example

    {"meta": {}, "node": {}}

[Types](#group-Types)

Element
-------

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`number` - [`String`](#definition-String)

`sequence` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`externalId` - [`String`](#definition-String)

##### Example

    {
      "id": "abc123",
      "number": "xyz789",
      "sequence": "xyz789",
      "type": "abc123",
      "externalId": "abc123"
    }

[Types](#group-Types)

ElementDataInput
----------------

##### Fields

Input Field

Description

`number` - [`String`](#definition-String)

`sequence` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`externalId` - [`String`](#definition-String)

##### Example

    {
      "number": "xyz789",
      "sequence": "abc123",
      "type": "xyz789",
      "externalId": "abc123"
    }

[Types](#group-Types)

ElementWhereInput
-----------------

##### Fields

Input Field

Description

`number` - [`String`](#definition-String)

`sequence` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`externalId` - [`String`](#definition-String)

##### Example

    {
      "number": "abc123",
      "sequence": "xyz789",
      "type": "xyz789",
      "externalId": "abc123"
    }

[Types](#group-Types)

Elements
--------

##### Fields

Field Name

Description

`data` - [`[Element]`](#definition-Element)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Element], "count": 987}

[Types](#group-Types)

Escrow
------

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`startDate` - [`String`](#definition-String)

`endDate` - [`String`](#definition-String)

`status` - [`String`](#definition-String)

`collateral` - [`Collateral`](#definition-Collateral)

`meta` - [`JSONObject`](#definition-JSONObject)

`transactions` - [`[Transaction]`](#definition-Transaction)

`sides` - [`[Side]`](#definition-Side)

`product` - [`Product`](#definition-Product)

##### Example

    {
      "id": "abc123",
      "startDate": "xyz789",
      "endDate": "abc123",
      "status": "xyz789",
      "collateral": Collateral,
      "meta": {},
      "transactions": [Transaction],
      "sides": [Side],
      "product": Product
    }

[Types](#group-Types)

EscrowDataInput
---------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`startDate` - [`String`](#definition-String)

`endDate` - [`String`](#definition-String)

`status` - [`String`](#definition-String)

`meta` - [`JSONObject`](#definition-JSONObject)

`collateral` - [`CollateralDataInput`](#definition-CollateralDataInput)

`transactions` - [`[TransactionDataInput]`](#definition-TransactionDataInput)

`product` - [`ProductDataInput`](#definition-ProductDataInput)

##### Example

    {
      "id": "xyz789",
      "startDate": "abc123",
      "endDate": "xyz789",
      "status": "xyz789",
      "meta": {},
      "collateral": CollateralDataInput,
      "transactions": [TransactionDataInput],
      "product": ProductDataInput
    }

[Types](#group-Types)

EscrowWhereInput
----------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`startDate` - [`String`](#definition-String)

`endDate` - [`String`](#definition-String)

`status` - [`String`](#definition-String)

`collateral` - [`CollateralWhereInput`](#definition-CollateralWhereInput)

`transactions` - [`[TransactionWhereInput]`](#definition-TransactionWhereInput)

`organization` - [`OrganizationWhereInput`](#definition-OrganizationWhereInput)

`product` - [`ProductWhereInput`](#definition-ProductWhereInput)

##### Example

    {
      "id": "abc123",
      "startDate": "abc123",
      "endDate": "abc123",
      "status": "abc123",
      "collateral": CollateralWhereInput,
      "transactions": [TransactionWhereInput],
      "organization": OrganizationWhereInput,
      "product": ProductWhereInput
    }

[Types](#group-Types)

Escrows
-------

##### Fields

Field Name

Description

`data` - [`[Escrow]`](#definition-Escrow)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Escrow], "count": 987}

[Types](#group-Types)

Fee
---

##### Fields

Field Name

Description

`value` - [`String`](#definition-String)

`escrow` - [`Escrow`](#definition-Escrow)

##### Example

    {
      "value": "abc123",
      "escrow": Escrow
    }

[Types](#group-Types)

FeeWhereInput
-------------

##### Fields

Input Field

Description

`value` - [`String`](#definition-String)

`escrow` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

##### Example

    {
      "value": "abc123",
      "escrow": EscrowWhereInput
    }

[Types](#group-Types)

Flow
----

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`escrows` - [`[Escrow]`](#definition-Escrow)

`step` - [`JSONObject`](#definition-JSONObject)

##### Example

    {
      "id": "xyz789",
      "escrows": [Escrow],
      "step": {}
    }

[Types](#group-Types)

FlowWhereInput
--------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

##### Example

    {"id": "abc123"}

[Types](#group-Types)

Flows
-----

##### Fields

Field Name

Description

`data` - [`[Flow]`](#definition-Flow)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Flow], "count": 987}

[Types](#group-Types)

ID
--

##### Description

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

##### Example

    4

[Types](#group-Types)

Int
---

##### Description

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

##### Example

    987

[Types](#group-Types)

JSONObject
----------

##### Example

    {}

[Types](#group-Types)

Leg
---

##### Fields

Field Name

Description

`id` - [`String!`](#definition-String)

`startDate` - [`String`](#definition-String)

`endDate` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`nature` - [`String`](#definition-String)

`activationDate` - [`String`](#definition-String)

`address` - [`String`](#definition-String)

`value` - [`String`](#definition-String)

##### Example

    {
      "id": "xyz789",
      "startDate": "abc123",
      "endDate": "xyz789",
      "type": "abc123",
      "nature": "abc123",
      "activationDate": "abc123",
      "address": "xyz789",
      "value": "abc123"
    }

[Types](#group-Types)

LegWhereInput
-------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`startDate` - [`String`](#definition-String)

`endDate` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`nature` - [`String`](#definition-String)

`activationDate` - [`String`](#definition-String)

`address` - [`String`](#definition-String)

`value` - [`String`](#definition-String)

##### Example

    {
      "id": "abc123",
      "startDate": "abc123",
      "endDate": "xyz789",
      "type": "abc123",
      "nature": "abc123",
      "activationDate": "xyz789",
      "address": "xyz789",
      "value": "abc123"
    }

[Types](#group-Types)

Legs
----

##### Fields

Field Name

Description

`data` - [`[Leg]`](#definition-Leg)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Leg], "count": 987}

[Types](#group-Types)

Liquidity
---------

##### Fields

Field Name

Description

`id` - [`Int`](#definition-Int)

`amount` - [`String`](#definition-String)

`escrow` - [`Escrow`](#definition-Escrow)

`organization` - [`Organization`](#definition-Organization)

##### Example

    {
      "id": 123,
      "amount": "xyz789",
      "escrow": Escrow,
      "organization": Organization
    }

[Types](#group-Types)

LiquidityWhereInput
-------------------

##### Fields

Input Field

Description

`id` - [`Int`](#definition-Int)

`amount` - [`String`](#definition-String)

`escrow` - [`EscrowWhereInput`](#definition-EscrowWhereInput)

`organization` - [`OrganizationWhereInput`](#definition-OrganizationWhereInput)

##### Example

    {
      "id": 987,
      "amount": "abc123",
      "escrow": EscrowWhereInput,
      "organization": OrganizationWhereInput
    }

[Types](#group-Types)

Outcome
-------

##### Fields

Field Name

Description

`id` - [`String`](#definition-String)

`description` - [`String`](#definition-String)

`tag` - [`String`](#definition-String)

`conditions` - [`[Condition]`](#definition-Condition)

`signature` - [`Signature`](#definition-Signature)

`block` - [`Block`](#definition-Block)

##### Example

    {
      "id": "abc123",
      "description": "xyz789",
      "tag": "abc123",
      "conditions": [Condition],
      "signature": Signature,
      "block": Block
    }

[Types](#group-Types)

OutcomeDataInput
----------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`description` - [`String`](#definition-String)

`tag` - [`String`](#definition-String)

`conditions` - [`[ConditionDataInput]`](#definition-ConditionDataInput)

`OR` - [`[OutcomeDataInput]`](#definition-OutcomeDataInput)

##### Example

    {
      "id": "abc123",
      "description": "abc123",
      "tag": "xyz789",
      "conditions": [ConditionDataInput],
      "OR": [OutcomeDataInput]
    }

[Types](#group-Types)

OutcomeWhereInput
-----------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`description` - [`String`](#definition-String)

`tag` - [`String`](#definition-String)

`conditions` - [`[ConditionWhereInput]`](#definition-ConditionWhereInput)

`block` - [`BlockWhereInput`](#definition-BlockWhereInput)

`signature` - [`SignatureWhereInput`](#definition-SignatureWhereInput)

`OR` - [`[OutcomeWhereInput]`](#definition-OutcomeWhereInput)

##### Example

    {
      "id": "abc123",
      "description": "xyz789",
      "tag": "xyz789",
      "conditions": [ConditionWhereInput],
      "block": BlockWhereInput,
      "signature": SignatureWhereInput,
      "OR": [OutcomeWhereInput]
    }

[Types](#group-Types)

Outcomes
--------

##### Fields

Field Name

Description

`data` - [`[Outcome]`](#definition-Outcome)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Outcome], "count": 123}

[Types](#group-Types)

Side
----

##### Fields

Field Name

Description

`id` - [`String`](#definition-String)

`movement` - [`String`](#definition-String)

`action` - [`String`](#definition-String)

`leaf` - [`String`](#definition-String)

##### Example

    {
      "id": "xyz789",
      "movement": "xyz789",
      "action": "xyz789",
      "leaf": "xyz789"
    }

[Types](#group-Types)

Signature
---------

##### Fields

Field Name

Description

`publicKey` - [`String`](#definition-String)

`wif` - [`String`](#definition-String)

##### Example

    {
      "publicKey": "abc123",
      "wif": "abc123"
    }

[Types](#group-Types)

SignatureDataInput
------------------

##### Fields

Input Field

Description

`publicKey` - [`String`](#definition-String)

`wif` - [`String`](#definition-String)

`transactions` - [`[TransactionDataInput]`](#definition-TransactionDataInput)

`escrow` - [`JSONObject`](#definition-JSONObject)

##### Example

    {
      "publicKey": "abc123",
      "wif": "abc123",
      "transactions": [TransactionDataInput],
      "escrow": {}
    }

[Types](#group-Types)

SignatureWhereInput
-------------------

##### Fields

Input Field

Description

`publicKey` - [`String`](#definition-String)

`wif` - [`String`](#definition-String)

`OR` - [`[SignatureWhereInput]`](#definition-SignatureWhereInput)

`escrow` - [`JSONObject`](#definition-JSONObject)

##### Example

    {
      "publicKey": "abc123",
      "wif": "xyz789",
      "OR": [SignatureWhereInput],
      "escrow": {}
    }

[Types](#group-Types)

String
------

##### Description

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

##### Example

    "abc123"

[Types](#group-Types)

Transaction
-----------

##### Fields

Field Name

Description

`id` - [`String`](#definition-String)

`hex` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`base64` - [`String`](#definition-String)

`txid` - [`String`](#definition-String)

`inputs` - [`Int`](#definition-Int)

`outputs` - [`Int`](#definition-Int)

##### Example

    {
      "id": "abc123",
      "hex": "abc123",
      "type": "xyz789",
      "base64": "abc123",
      "txid": "abc123",
      "inputs": 987,
      "outputs": 987
    }

[Types](#group-Types)

TransactionDataInput
--------------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`hex` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`base64` - [`String`](#definition-String)

`txid` - [`String`](#definition-String)

`inputs` - [`Int`](#definition-Int)

`outputs` - [`Int`](#definition-Int)

##### Example

    {
      "id": "abc123",
      "hex": "xyz789",
      "type": "xyz789",
      "base64": "abc123",
      "txid": "abc123",
      "inputs": 123,
      "outputs": 123
    }

[Types](#group-Types)

TransactionWhereInput
---------------------

##### Fields

Input Field

Description

`id` - [`String`](#definition-String)

`hex` - [`String`](#definition-String)

`type` - [`String`](#definition-String)

`base64` - [`String`](#definition-String)

`txid` - [`String`](#definition-String)

`inputs` - [`Int`](#definition-Int)

`outputs` - [`Int`](#definition-Int)

##### Example

    {
      "id": "xyz789",
      "hex": "xyz789",
      "type": "abc123",
      "base64": "abc123",
      "txid": "xyz789",
      "inputs": 123,
      "outputs": 987
    }

[Types](#group-Types)

Transactions
------------

##### Fields

Field Name

Description

`data` - [`[Transaction]`](#definition-Transaction)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Transaction], "count": 123}

[Types](#group-Types)

Verification
------------

##### Fields

Field Name

Description

`id` - [`ID`](#definition-ID)

`leftOperand` - [`JSONObject`](#definition-JSONObject)

`rightOperand` - [`JSONObject`](#definition-JSONObject)

`operation` - [`String`](#definition-String)

`condition` - [`Condition`](#definition-Condition)

##### Example

    {
      "id": 4,
      "leftOperand": {},
      "rightOperand": {},
      "operation": "abc123",
      "condition": Condition
    }

[Types](#group-Types)

VerificationDataInput
---------------------

##### Fields

Input Field

Description

`id` - [`ID`](#definition-ID)

`leftOperand` - [`JSONObject`](#definition-JSONObject)

`rightOperand` - [`JSONObject`](#definition-JSONObject)

`operation` - [`String`](#definition-String)

`condition` - [`ConditionDataInput`](#definition-ConditionDataInput)

##### Example

    {
      "id": 4,
      "leftOperand": {},
      "rightOperand": {},
      "operation": "abc123",
      "condition": ConditionDataInput
    }

[Types](#group-Types)

VerificationWhereInput
----------------------

##### Fields

Input Field

Description

`id` - [`ID`](#definition-ID)

`leftOperand` - [`JSONObject`](#definition-JSONObject)

`rightOperand` - [`JSONObject`](#definition-JSONObject)

`operation` - [`String`](#definition-String)

`condition` - [`ConditionWhereInput`](#definition-ConditionWhereInput)

##### Example

    {
      "id": "4",
      "leftOperand": {},
      "rightOperand": {},
      "operation": "abc123",
      "condition": ConditionWhereInput
    }

[Types](#group-Types)

--------

##### Fields

Field Name

Description

`data` - [`[Webhook]`](#definition-Webhook)

`count` - [`Int`](#definition-Int)

##### Example

    {"data": [Webhook], "count": 123}
