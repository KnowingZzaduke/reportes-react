import { Outlet } from "react-router-dom";
export function MainA() {
  return (
    <div className="content_main">
      <main>
      <Outlet/>
      </main>
    </div>
  );
}
