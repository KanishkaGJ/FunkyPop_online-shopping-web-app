import { Link } from "react-router-dom";


export default function UpdatePNav() {
    return (
   <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">FunkyPop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0">
            <Link to='/login'>
                <button class="btn btn-outline-success m-l-1200 m-t-50" type="submit">Login</button>
            </Link>
            <Link to='/signup'>
                <button class="btn btn-outline-dark m-l-1300" type="submit">signup</button>
            </Link>
            
          </form>
        </div>
      </nav>
    </>
);
}