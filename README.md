# Fullpage Scroll v2

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

    <!-- CSS Stylesheet -->
    <link rel="stylesheet" href="style.css" />

    <!-- Font Awesome Icon CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

    <!-- Bootstrap Stylesheet -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="prism.css">
    <script src="prism.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
            display: none;
        }

        .wrapper {
            height: 100vh;
            overflow: auto;
            scroll-snap-type: y mandatory;
        }

        .page {
            scroll-snap-align: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #page-1 {
            background-color: #de5448;
        }

        #page-2 {
            background: #4267b2;
        }

        #page-3 {
            background: #4CAF50;
        }

        #page-4 {
            background: #d1be15;
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

        .btn-1 {
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

        .btn-3 {
            position: fixed;
            left: 65%;
            right: 35%;
            bottom: 20px;
            z-index: 1;
        }

        /* Navigation End*/
    </style>
</head>

<body>
    <div class="wrapper">
        <div id="page-1" class="page">
            <div class="jumbotron">
                <h1 class="display-4">Page 1</h1>
            </div>
        </div>

        <div id="page-2" class="page">
            <div class="jumbotron">
                <h1 class="display-4">Page 2</h1>
            </div>
        </div>

        <div id="page-3" class="page">
            <div class="jumbotron">
                <h1 class="display-4">Page 3</h1>
            </div>
        </div>

        <div id="page-4" class="page">
            <div class="jumbotron">
                <h1 class="display-4">Page 4</h1>
            </div>
        </div>
    </div>

    <div class="navigation-wrapper">
        <div class="navigation-btn">
            <div class="btn-1">
                <i class="fas fa-arrow-alt-circle-up fa-3x"></i>
            </div>

            <div class="currentPage">
            </div>

            <div class="btn-3">
                <i class="fas fa-arrow-alt-circle-down fa-3x"></i>
            </div>
        </div>
    </div>
    <script>
        const NoOfPages = 4;
        const nop = NoOfPages;
    </script>
    <script src="https://cdn.jsdelivr.net/gh/SatvikG7/Fullpage-Scroll/script.js"></script>
</body>

</html>
```
