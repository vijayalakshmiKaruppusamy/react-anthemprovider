import { ErrorPage,GoBack} from "./errorStyle"

export default function Error(){
  return(
        <ErrorPage>
          <h1>OOPS!</h1>
          <p>404 - Page Not Found</p>
          <GoBack to='/drug' >Go Back</GoBack>
        </ErrorPage>
    )
}