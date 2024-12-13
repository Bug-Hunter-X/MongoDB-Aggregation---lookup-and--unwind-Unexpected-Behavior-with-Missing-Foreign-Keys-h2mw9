```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $unwind: {
      path: "$results",
      preserveNullAndEmptyArrays: true
    }
  }
];

db.collectionA.aggregate(pipeline);
```