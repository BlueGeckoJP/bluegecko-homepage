import { JSX, useEffect, useState } from "react";
import { useLocation } from "react-router";

function AnimatedOutlet({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const [currentComponent, setCurrentComponent] = useState(children);

  useEffect(() => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setCurrentComponent(children);
      });
    } else {
      setCurrentComponent(children);
    }
  }, [location, children]);

  return currentComponent;
}

export default AnimatedOutlet;
