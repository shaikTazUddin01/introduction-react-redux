import {
  decrement,
  increment,
  incrementIn5,
} from "./redux/features/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-200 p-10 rounded-md bg-slate-100">
        <button
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          onClick={() => dispatch(incrementIn5(5))}
        >
          Increment 5
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
