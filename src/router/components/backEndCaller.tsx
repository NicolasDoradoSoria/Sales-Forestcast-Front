import { Suspense, type ReactNode } from "react";
import { ErrorHandlerProvider } from "../context/errorHandler";
import LoadingFallback from "./loadingFallBack";

type WithSuspenseProps = {
  child: ReactNode
}

const BackendCaller = ({child}: WithSuspenseProps) =>  (
  <ErrorHandlerProvider>
    <Suspense fallback={<LoadingFallback />}>
      {child}
    </Suspense>
  </ErrorHandlerProvider>
)
 
export default BackendCaller;