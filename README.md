<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="padding-left: 10px; position: sticky; top: 0; overflow: hidden;">
            <a class="navbar-brand" href="./index.html">Cesar PM</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onclick="Colapsar()">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contact.html">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./projects.html">Proyectos</a>
                    </li>
                </ul>
            </div>

            <script>
                function Colapsar(){
                    var element = document.getElementById("navbarSupportedContent");
                    if (element.classList.contains("collapse"))
                        element.classList.remove("collapse");
                    else
                        element.classList.add("collapse");
                }
            </script>
        </nav>
        <div style="padding: 10px;">
            <div>
                <h1>Presentación</h1>
                <p style="margin: 25px;">
                    Mi nombre es César Palomares Marín, vivo en Mallorca, Islas Baleares, España. <br>
                    Nacido el 08-11-2000. <br>
                    Tengo experiencia como programador desde 2019 y experiencia laboral en el sector desde 2022. <br>
                </p>
            </div>
            <div style="text-align: center;">
                <h1>Conocimientos</h1>
                <p style="margin: 25px;">
                    Estos son los lenguajes que manejo junto al nivel de experiencia que tengo con ellos:
                </p>
                <div class="row">
                    <div class="col border rounded shadow-sm" onclick="verDetalles(this)">
                        <img src="Recursos/Csharp_Logo.png" alt="C#">
                        <div class="medidornivel">
                            <div class="nivel" style="margin-left: auto;"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div id="Alto" class="nivel" style="margin-right: auto;"></div>
                        </div>
                        <div class="Detalle colapsado">
                            <ol>
                                <li>.NET</li>
                                <li>Windows forms</li>
                                <li>Razor pages</li>
                                <li>Windows services</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col border rounded shadow-sm" onclick="verDetalles(this)">
                        <img src="Recursos/Logo_Java.png" alt="Java">
                        <div class="medidornivel">
                            <div class="nivel" style="margin-left: auto;"></div>
                            <div class="nivel"></div>
                            <div id="Medio" class="nivel"></div>
                            <div class="nivel"></div>
                            <div class="nivel" style="margin-right: auto;"></div>
                        </div>
                        <div class="Detalle colapsado">
                            <ol>
                                <li>Base</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col border rounded shadow-sm" onclick="verDetalles(this)">
                        <img src="Recursos/Logo_SQL.png" alt="SQL">
                        <div class="medidornivel">
                            <div class="nivel" style="margin-left: auto;"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div id="Alto" class="nivel" style="margin-right: auto;"></div>
                        </div>
                        <div class="Detalle colapsado">
                            <ol>
                                <li>Base</li>
                            </ol>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col border rounded shadow-sm" onclick="verDetalles(this)">
                        <img src="Recursos/Logo_HTML.png" alt="HTML">
                        <div class="medidornivel">
                            <div class="nivel" style="margin-left: auto;"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div id="Alto" class="nivel" style="margin-right: auto;"></div>
                        </div>
                        <div class="Detalle colapsado">
                            <ol>
                                <li>Base</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col border rounded shadow-sm" onclick="verDetalles(this)">
                        <img src="Recursos/Logo_Javascript.png" alt="JavaScrip">
                        <div class="medidornivel">
                            <div class="nivel" style="margin-left: auto;"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div id="MedioAlto" class="nivel"></div>
                            <div class="nivel" style="margin-right: auto;"></div>
                        </div>
                        <div class="Detalle colapsado">
                            <ol>
                                <li>Kendo grid</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col border rounded shadow-sm" onclick="verDetalles(this)">
                        <img src="Recursos/Logo_CSS.png" alt="CSS">
                        <div class="medidornivel">
                            <div class="nivel" style="margin-left: auto;"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div id="MedioAlto" class="nivel"></div>
                            <div class="nivel" style="margin-right: auto;"></div>
                        </div>
                        <div class="Detalle colapsado">
                            <ol>
                                <li>bootstrap</li>
                            </ol>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col border rounded shadow-sm" onclick="verDetalles(this)">
                        <img src="Recursos/Logo_Python.png" alt="Python">
                        <div class="medidornivel">
                            <div id="Bajo" class="nivel" style="margin-left: auto;"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div class="nivel"></div>
                            <div class="nivel" style="margin-right: auto;"></div>
                        </div>
                        <div class="Detalle colapsado">
                            <ol>
                                <li>OpenCV</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
            </div>
        </div>

        <!--Page footer-->
        <footer style="background-color: black; color: aliceblue; padding: 10px;">
            <h4>Contacto</h4>
            <div style="margin: 20px;">
                <a href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin-square" style="font-size:18px"> Cesar Palomares Marín</i></a><br>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfsctVFJpQrCmFqGqbBxqmRtPkjlNrtlglTmzbFSWthqrSdhgczKsBJfrnPCVMHWdPNdxV"><i class="fa fa-envelope" style="font-size:18px"> cesarboira@gmail.com</i></a><br>
                <a href="https://github.com/cesarboira"><i class="fa fa-github" style="font-size:18px"> cesarboira</i></a><br>
            </div>
            <div style="text-align: center;">
                <p>
                    <a href="#">Política de privacidad</a> y <a href="#">Términos de uso</a>.
                    Copyright 2025.
                </p>
            </div>
        </footer>
    </body>
</html>

<script>
    function verDetalles(){

    }
</script>

<style>
    img{
        width: auto;
        height: auto;
        max-height: 300px;
        max-width: 300px;
    }

    .row{
        margin:0;
    }
    .col{
        margin: 20px;
        transition: 2s;
    }
    .medidornivel{
        display: flex;
        width: 300px;
        margin: auto;
        padding-top: 10px;
        padding-bottom: 35px;
        align-items: center;
    }
    .nivel{
        padding: 5px;
        padding-left: 25px;
        border-radius: 12px;
        border-color: grey;
        border-style: solid;
        border-width: 2px;
    }
    .Detalle{
        text-align: left;
        font: bold;
    }

    .col:hover{
        background-color: rgb(141, 255, 255);
    }

    #Bajo{
        background-color: red;
    }
    #BajoMedio{
        background-color: orange;
    }
    #Medio{
        background-color: yellow;
    }
    #MedioAlto{
        background-color: lime;
    }
    #Alto{
        background-color: green;
    }
</style>
