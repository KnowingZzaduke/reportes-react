import { Outlet } from "react-router-dom";
export function MainA() {
  return (
    <div className="content_main-a">
      <main>
      <Outlet/>
      </main>
    </div>
  );
}
