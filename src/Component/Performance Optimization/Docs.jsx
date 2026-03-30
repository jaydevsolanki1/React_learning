import React from "react";

function Docs() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🚀 React Optimization Guide</h1>

      {/* 🔹 React.memo */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">🔹 React.memo</h4>
          <p>
            Prevents unnecessary re-render of a child component when props do
            not change.
          </p>

          <h6>✅ Use when:</h6>
          <ul>
            <li>Parent re-renders frequently</li>
            <li>Child props stay same</li>
          </ul>

          <h6>📍 Real Case:</h6>
          <p>
            Parent has counter but child shows static data → child re-renders
            unnecessarily
          </p>

          <h6>✅ Example:</h6>
          <pre className="bg-light p-2">export default React.memo(Child);</pre>

          <h6>❌ Avoid when:</h6>
          <ul>
            <li>Component is small/simple</li>
            <li>Props change frequently</li>
          </ul>
        </div>
      </div>

      {/* 🔹 useMemo */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">🔹 useMemo</h4>
          <p>Caches result of expensive calculations to improve performance.</p>

          <h6>✅ Use when:</h6>
          <ul>
            <li>Heavy computation</li>
            <li>Large array filtering / sorting</li>
          </ul>

          <h6>📍 Real Case:</h6>
          <p>Search filter on large user list (1000+ users)</p>

          <h6>✅ Example:</h6>
          <pre className="bg-light p-2">
            {`const filteredUsers = useMemo(() => {
               return users.filter(u => u.name.includes(search));
            }, [users, search]);`}
          </pre>

          <h6>❌ Avoid when:</h6>
          <p>Simple calculation like: count + 1</p>
        </div>
      </div>

      {/* 🔹 useCallback */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">🔹 useCallback</h4>
          <p>
            Prevents function re-creation and keeps same function reference.
          </p>

          <h6>✅ Use when:</h6>
          <ul>
            <li>Passing function to child</li>
            <li>Child is wrapped with React.memo</li>
          </ul>

          <h6>📍 Real Case:</h6>
          <p>Button component re-renders because function reference changes</p>

          <h6>✅ Example:</h6>
          <pre className="bg-light p-2">
            {`const handleClick = useCallback(() => {
                 console.log("click");
            }, []);`}
          </pre>

          <h6>❌ Avoid when:</h6>
          <p>Function is not passed to child</p>
        </div>
      </div>

      {/* 🔥 Combination */}
      <div className="card mb-4 shadow-sm border-success">
        <div className="card-body">
          <h4 className="card-title text-success">
            🔥 Combination (Important)
          </h4>

          <h6>📍 Real Case:</h6>
          <p>Parent → Child, child should NOT re-render</p>

          <h6>✅ Use Together:</h6>
          <pre className="bg-light p-2">
            {`const Child = React.memo(({ onClick }) => {
                 return <button onClick={onClick}>Click</button>;
            });

        const handleClick = useCallback(() => {}, []);
            <Child onClick={handleClick} />`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Docs;
