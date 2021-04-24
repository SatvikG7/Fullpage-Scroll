
# Fullpage Scroll

This is a Javascript code that makes pseudo SPAs in seconds
## Authors and Acknowledgement

- [@SatvikG7](https://www.github.com/SatvikG7) for development and design
  
## Demo

Visit [Fullpage-Scroll](https://satvikg7.github.io/Fullpage-Scroll/)
  
## Usage/Examples

```html

<!DOCTYPE html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fullpage Scroll</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	<style>
	* {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
	}
	::-webkit-scrollbar {
 		display: none;
	}
	.page {
        height: 100vh;
        width: 100vw;
        display: grid;
        place-items: center;
	}
	#page-1 {
 		background-color: ...;
	}
	#page-2 {
 		background-color: ...;
	}
      .
      .
      .
	#page-n{
   	 	background-color: ...;
	}
 
    /* Navigation */
    .navigation-wrapper {
    color: rgba(15, 34, 136, 0.75);
    display: flex;
    flex-direction: row;
    }
    .navigation-wrapper>div:hover {
    color: rgb(33, 8, 56);
    }
    .btn-1{
    position: fixed;
    left: 35%;
    right: 65%;
    bottom: 20px;
    z-index: 1;

    }
    .currentPage {
    position: fixed;
    left: 50%;
    right: 50%;
    font-size: 30px;
    font-weight: 700;
    margin: 0px 15px 5px 15px;
    bottom: 20px;
    z-index: 1;
    }
    .btn-3{
    position: fixed;
    left: 65%;
    right: 35%;
    bottom: 20px;
    z-index: 1;
    }

	</style>
</head>
<body>
    <div class="page-container">
        <div class="navigation-wrapper">
            <div class="btn-1">
                <i class="fas fa-arrow-alt-circle-up fa-3x"></i>
            </div>
            <div class="currentPage"></div>
            <div class="btn-3">
                <i class="fas fa-arrow-alt-circle-down fa-3x"></i>
            </div>
        </div>
<!--Edit Below-->
        <div id="page-1" class="page">
            <div class="jumbotron">
				This is page 1
            </div>
        </div>
        <div id="page-2" class="page">
            <div class="jumbotron">
				This is page 2
            </div>
        </div>
		.
		.
		.
		<div id="page-n" class="page">
            <div class="jumbotron">
				This is page n
            </div>
        </div>
    </div>
    <script>
//Number of pages in your site
        const NoOfPages = n;
        const nop = NoOfPages;
    </script>
	<script src="https://cdn.jsdelivr.net/gh/SatvikG7/Fullpage-Scroll/script.js"></script>
</body>
</html>
                    
```

  