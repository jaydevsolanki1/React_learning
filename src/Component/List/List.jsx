import React from "react";

function List() {
  const Fruits = [
    "Apple",
    "Banana",
    "Date",
    "Elderberry",
    "Grape",
    "Cherry",
    "Fig",
  ];

  const FruitsListItems = Fruits.map((fruit) => (
    <span key={fruit}> - {fruit} &nbsp; </span>
  ));

  const sortArray = (arr) => [...arr].sort((a, b) => a.localeCompare(b));
  const sortArrayReverse = (arr) => [...arr].sort((a, b) => b.localeCompare(a));

  const sortedFruits = sortArray(Fruits);
  const reverseSortedFruits = sortArrayReverse(Fruits);

  const sortIndex = (arr) => arr.map((item, index) => `${index + 1}. ${item}`);
  const reverseSortIndex = (arr) =>
    arr.map((item, index) => `${arr.length - index}. ${item}`);

  const sortedFruitsWithIndex = sortIndex(sortedFruits);
  const reverseSortedFruitsWithIndex = reverseSortIndex(reverseSortedFruits);

  const FruitsObj = [
    { name: "Apple", calory: 52 },
    { name: "Cherry", calory: 23 },
    { name: "Elderberry", calory: 73 },
    { name: "Banana", calory: 89 },
    { name: "Date", calory: 282 },
    { name: "Fig", calory: 74 },
    { name: "Grape", calory: 69 },
  ];

  const FruitsObjList = FruitsObj.map((fruit) => (
    <span key={fruit.name}>
      &nbsp; &nbsp; - {fruit.name} [cal-{fruit.calory}] &nbsp;
    </span>
  ));

  const sortFruitsObjByName = [...FruitsObj].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortFruitsObjByCal = [...FruitsObj].sort((a, b) => a.calory - b.calory);
  const reverseFruitsObjByCal = [...FruitsObj].sort(
    (a, b) => b.calory - a.calory
  );

  const sortIndexObj = FruitsObj.map(
    (item, index) => `${index + 1}. ${item.name}`
  );
  const reverseSortIndexObj = FruitsObj.map(
    (item, index) => `${FruitsObj.length - index}. ${item.name}`
  );

  const maixmumCalory = Math.max(...FruitsObj.map((fruit) => fruit.calory));
  // console.log(`Maximum Calory: ${maixmumCalory}`);
  // only one maximum calory fruit

  return (
    <>
      <hr />
      <div className="container py-4 rounded-4">
        <h2 className="text-center fs-1 mb-4">Fruits List</h2>
        <p className="text-center mb-5">Array: {FruitsListItems}</p>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="p-3 border rounded-4 shadow-sm h-100">
              <h5 className="text-center">Sorted List</h5>
              <hr />
              <ul>
                {sortedFruits.map((fruit) => (
                  <li key={fruit}>{fruit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="p-3 border rounded-4 shadow-sm h-100">
              <h5 className="text-center">Reverse Sorted</h5>
              <hr />
              <ul>
                {reverseSortedFruits.map((fruit) => (
                  <li key={fruit}>{fruit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="p-3 border rounded-4 shadow-sm h-100">
              <h5 className="text-center">Sorted with Index</h5>
              <hr />
              <ul>
                {sortedFruitsWithIndex.map((fruit, index) => (
                  <li key={index}>{fruit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="p-3 border rounded-4 shadow-sm h-100">
              <h5 className="text-center">Reverse with Index</h5>
              <hr />
              <ul>
                {reverseSortedFruitsWithIndex.map((fruit, index) => (
                  <li key={index}>{fruit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center">Object: {FruitsObjList}</p>

      <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 py-4 flex-wrap">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 border rounded-4 shadow-sm h-100">
            <h5 className="text-center">Sorted List (Object)</h5>
            <hr />
            <ul>
              {sortFruitsObjByName.map((fruit) => (
                <li key={fruit.name}>
                  {fruit.name} [cal-{fruit.calory}]
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 border rounded-4 shadow-sm h-100">
            <h5 className="text-center">Sorted (Calory)</h5>
            <hr />
            <ul>
              {sortFruitsObjByCal.map((fruit) => (
                <li key={fruit.name}>
                  {fruit.name} [cal-{fruit.calory}]
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 border rounded-4 shadow-sm h-100">
            <h5 className="text-center">Reverse Sorted (Calory)</h5>
            <hr />
            <ul>
              {reverseFruitsObjByCal.map((fruit) => (
                <li key={fruit.name}>
                  {fruit.name} [cal-{fruit.calory}]
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 border rounded-4 shadow-sm h-100">
            <h5 className="text-center">Maximum Calory</h5>
            <hr />
            <ul>
              {FruitsObj.filter((fruit) => fruit.calory >= 74).map((fruit) => (
                <li key={fruit.name}>
                  {fruit.name} [cal-{fruit.calory}]
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 border rounded-4 shadow-sm h-100">
            <h5 className="text-center">Minimum Calory</h5>
            <hr />
            <ul>
              {FruitsObj.filter((fruit) => fruit.calory <= 70).map((fruit) => (
                <li key={fruit.name}>
                  {fruit.name} [cal-{fruit.calory}]
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*  FINAL BOX: With partition between Sorted and Reverse Index */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="p-3 border rounded-4 shadow-sm h-100">
            <h5 className="text-center">Sorted & Reverse Index</h5>
            <hr />
            <div className="">
              <h6 className="text-center text-primary">Sorted Index</h6>
              <ul className="mb-2">
                {sortIndexObj.map((item, index) => (
                  <li key={`s-${index}`}>{item}</li>
                ))}
              </ul>
              <hr className="my-2" />
              <h6 className="text-center text-danger">Reverse Index</h6>
              <ul>
                {reverseSortIndexObj.map((item, index) => (
                  <li key={`r-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
            {/* // THIS IS NEW CONCEPT TO LEARN IS THE R-  S- BOTH ARE USE IS FOR UNIQUE KEY WHY USE BECAUSE IF WE USE SAME KEY IN BOTH LISTS THEN IT WILL GIVE ERROR SO WE USE UNIQUE KEY FOR EACH LIST 
            <ul>  {sortedFruits.map((fruit, index) => <li key={index}>{fruit}</li>)}</ul>
            <ul> {reverseSortedFruits.map((fruit, index) => <li key={index}>{fruit}</li>)}</ul>
            */}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
