function Details() {
  let fruit1 = "Banana";
  let fruit2 = "Durian";
  {
  }
  return (
    <>
      <div className="details container mx-auto p-4 mt-5 mb-5 rounded-4 shadow-lg" style={{ backgroundColor: "#f8f9fa"   }}>
        <p>
        <h2 className="text-center">Details</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          eligendi voluptate, aliquam mollitia voluptatem magni at illum
          assumenda nisi. Maxime eum libero provident et quisquam aut aperiam
          blanditiis omnis aliquam labore quibusdam reiciendis autem
          consequuntur quam voluptatibus nemo officia dolores magni, sint harum
          maiores vel quidem! Nesciunt pariatur vel eveniet assumenda aut quos
          repudiandae praesentium temporibus ipsum aperiam quaerat reiciendis
          veritatis neque accusantium mollitia, expedita ducimus? Quam cum
          officia veniam provident explicabo pariatur nihil itaque dicta magni
          dolorum laudantium natus officiis fuga id unde ipsum quos quibusdam
          esse eaque, deserunt voluptates fugiat adipisci reprehenderit
          necessitatibus! A laboriosam excepturi architecto laudantium?
        </p>
        {newFunction()}
        <hr />
      </div>
    </>
  );

  function newFunction() {
    return (
      <ul
        className="d-flex gap-5 list-unstyled justify-content-center align-items-center"
        id="list "
      >
        <li>Apple</li>
        <li>{fruit1}</li>
        <li>{fruit2}</li>
      </ul>
    );
  }
}
export default Details;
