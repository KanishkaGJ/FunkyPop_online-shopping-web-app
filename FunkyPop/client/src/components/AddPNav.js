

export default function AddPNav() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">FunkyPop</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/viewP">View Product</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link active" href="/">Add Product </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/clientP">Home</a>
                </li>
                
                </ul>
                
            </div>
        </nav>
</>
);
}