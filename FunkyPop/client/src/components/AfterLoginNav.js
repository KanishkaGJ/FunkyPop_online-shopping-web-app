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
            <Link to='/cusprofile'>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Profile</button>
            </Link>
            <Link to='/'>
                <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Cart</button>
            </Link>
            
          </form>
        </div>
      </nav>
    </>
);
}