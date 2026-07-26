import React, { useState } from "react";
import { jsPDF } from "jspdf";

function OnChange({ mode }) {
  const [name, setName] = useState("Guest");
  const [product, setProduct] = useState("Custom Order");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [city, setCity] = useState("");
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const doc = new jsPDF();

    const pricePerItem = 100;
    const total = Number(quantity) * pricePerItem;

    doc.setFontSize(20);
    doc.text("INVOICE", 85, 20);

    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 140, 30);

    doc.setFontSize(15);
    doc.text("Customer Details", 20, 45);

    doc.setFontSize(12);
    doc.text(`Name : ${name}`, 20, 55);
    doc.text(`City : ${city}`, 20, 63);
    doc.text(`Payment : ${payment}`, 20, 71);

    doc.setFontSize(15);
    doc.text("Order Details", 20, 90);

    doc.setFontSize(12);
    doc.text(`Product : ${product}`, 20, 100);
    doc.text(`Quantity : ${quantity}`, 20, 108);
    doc.text(`Comment : ${comment || "-"}`, 20, 116);

    doc.text(`Price Per Item : INR ${pricePerItem}`, 20, 130);
    doc.text(`Total : INR ${total}`, 20, 138);

    doc.line(20, 145, 190, 145);

    doc.setFontSize(11);
    doc.text("Thank you for shopping with us!", 20, 155);

    doc.save("Invoice.pdf");
  };

  // for mode
  const containerClass = `${
    mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
  }`;

  const cardClass = `card shadow-lg border-0 rounded-4 ${
    mode === "dark" ? "bg-dark text-light" : "bg-white text-dark"
  }`;

  const inputClass = `form-control ${
    mode === "dark" ? "bg-dark text-light border-light" : "bg-white text-dark"
  }`;

  const selectClass = `form-select ${
    mode === "dark" ? "bg-dark text-light border-light" : "bg-white text-dark"
  }`;

  const summaryCard = `card border-0 shadow-sm ${
    mode === "dark" ? "bg-secondary text-light" : "bg-light text-dark"
  }`;

  const buttonClass = `btn btn-lg ${
    mode === "dark" ? "btn-outline-light" : "btn-primary"
  }`;

  return (
    <>
      <div className={`container py-5 ${containerClass}`}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-11 col-md-10 col-lg-8">
            <div className={cardClass}>
              <div className="card-body p-4">
                <h1 className="text-center mb-4">Order Form</h1>

                <form onSubmit={handleSubmit}>
                  {/* Heading */}
                  <h3 className="text-center mb-4">Place Your Order</h3>

                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <div className="form-text">
                      Name: <strong>{name}</strong>
                    </div>
                  </div>

                  {/* Product */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Enter product"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      required
                    />
                    <div className="form-text">
                      Product: <strong>{product}</strong>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Quantity</label>
                    <input
                      type="number"
                      className={inputClass}
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                    <div className="form-text">
                      Quantity: <strong>{quantity}</strong> (Max 10)
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Comment</label>
                    <textarea
                      rows="4"
                      className={inputClass}
                      placeholder="Write your comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>

                    <div className="form-text">
                      Comment: <strong>{comment || "No Comment"}</strong>
                    </div>
                  </div>

                  {/* City */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Select City
                    </label>

                    <select
                      className={selectClass}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    >
                      <option value="">Choose City</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Rajkot">Rajkot</option>
                      <option value="Junagadh">Junagadh</option>
                    </select>

                    <div className="form-text">
                      City: <strong>{city || "-"}</strong>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold d-block">
                      Payment Method
                    </label>

                    <div className="row">
                      {[
                        "MASTER-CARD",
                        "GOOGLE WALLET",
                        "CREDIT-CARD",
                        "PAYPAL",
                      ].map((pay) => (
                        <div
                          className="col-12 col-sm-6 col-lg-3 mb-2"
                          key={pay}
                        >
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment"
                              value={pay}
                              checked={payment === pay}
                              onChange={(e) => setPayment(e.target.value)}
                              required
                            />

                            <label className="form-check-label">{pay}</label>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="form-text">
                      Payment: <strong>{payment || "-"}</strong>
                    </div>
                  </div>

                  {/* Order Summary */}

                  <div className={summaryCard}>
                    <div className="card-body">
                      <h5 className="mb-3">Order Summary</h5>

                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            <strong>Name:</strong> {name}
                          </p>

                          <p>
                            <strong>Product:</strong> {product}
                          </p>

                          <p>
                            <strong>Quantity:</strong> {quantity}
                          </p>
                        </div>

                        <div className="col-md-6">
                          <p>
                            <strong>City:</strong> {city || "-"}
                          </p>

                          <p>
                            <strong>Payment:</strong> {payment || "-"}
                          </p>

                          <p>
                            <strong>Total:</strong> ₹{Number(quantity) * 100}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}

                  <div className="d-grid">
                    <button type="submit" className={buttonClass}>
                      Generate Invoice PDF
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default OnChange;

//! Advanced Code

// import React, { useState } from "react";
// import { jsPDF } from "jspdf";

// function OrderFormAdvanced() {
//   const [form, setForm] = useState({
//     name: "Guest",
//     product: "Custom Order",
//     quantity: 1,
//     comment: "",
//     city: "",
//     payment: "",
//   });

//   // ✅ Single handler for all inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ✅ Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text("INVOICE", 90, 20);

//     doc.setFontSize(12);
//     doc.text(`Date: ${new Date().toLocaleDateString()}`, 140, 30);

//     doc.setFontSize(14);
//     doc.text("Customer Details:", 20, 40);
//     doc.setFontSize(12);
//     doc.text(`Name: ${form.name}`, 20, 48);
//     doc.text(`City: ${form.city}`, 20, 56);
//     doc.text(`Payment Method: ${form.payment}`, 20, 64);

//     doc.setFontSize(14);
//     doc.text("Order Details:", 20, 80);
//     doc.setFontSize(12);
//     doc.text(`Product: ${form.product}`, 20, 88);
//     doc.text(`Quantity: ${form.quantity}`, 20, 96);
//     doc.text(`Comments: ${form.comment || "-"}`, 20, 104);

//     const pricePerItem = 100;
//     const total = pricePerItem * Number(form.quantity);

//     doc.text(`Price per: INR ${pricePerItem}`, 20, 112);
//     doc.text(`Total: INR ${total}`, 20, 120);

//     doc.line(20, 124, 180, 124);
//     doc.setFontSize(10);
//     doc.text("Thank you for your order!", 20, 132);

//     doc.save("invoice.pdf");
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center">Advanced Form</h1>

//       <div className="p-3 d-flex justify-content-center">
//         <div className="border p-4 col-md-8 rounded-4">

//           <form onSubmit={handleSubmit}>
//             <h3 className="text-center">Order</h3>
//             <hr />

//             {/* Name */}
//             <input
//               className="w-100 mb-2"
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter Name"
//               required
//             />
//             <p>Name: {form.name}</p>

//             {/* Product */}
//             <input
//               className="w-100 mb-2"
//               type="text"
//               name="product"
//               value={form.product}
//               onChange={handleChange}
//               placeholder="Product"
//               required
//             />
//             <p>Product: {form.product}</p>

//             {/* Quantity */}
//             <input
//               className="w-100 mb-2"
//               type="number"
//               name="quantity"
//               value={form.quantity}
//               onChange={handleChange}
//               min={1}
//               max={10}
//               required
//             />
//             <p>Quantity: {form.quantity}</p>

//             {/* Comment */}
//             <textarea
//               className="w-100 mb-2"
//               name="comment"
//               value={form.comment}
//               onChange={handleChange}
//               placeholder="Comment..."
//             />
//             <p>Comment: {form.comment}</p>

//             {/* City */}
//             <select
//               className="w-50 mb-2"
//               name="city"
//               value={form.city}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select City</option>
//               <option value="Ahmedabad">Ahmedabad</option>
//               <option value="Rajkot">Rajkot</option>
//               <option value="Junagadh">Junagadh</option>
//             </select>
//             <p>City: {form.city}</p>

//             {/* Payment */}
//             <div className="mb-2">
//               <span>Payment:</span>
//               {["MASTER-CARD", "GOOGLE WALLET", "CREDIT-CARD", "PAYPAL"].map(
//                 (pay) => (
//                   <label key={pay} className="mx-2">
//                     <input
//                       type="radio"
//                       name="payment"
//                       value={pay}
//                       checked={form.payment === pay}
//                       onChange={handleChange}
//                       required
//                     />
//                     {pay}
//                   </label>
//                 )
//               )}
//             </div>

//             <p>Payment: {form.payment}</p>

//             <div className="text-center mt-3">
//               <button className="btn btn-primary">
//                 Submit & Generate PDF
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderFormAdvanced;

//! 2nd example but Powerfully

// import React, { useState } from "react";

// function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   // ✅ handle input change
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ✅ handle submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reload

//     console.log("Form Data:", form);
//   };

//   return (
//     <div className="border p-3 m-3">
//       <h2>Login Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={form.email}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={form.password}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
