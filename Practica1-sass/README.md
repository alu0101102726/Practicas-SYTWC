# Practicas-SYTWC

<br />
<p align="center">

  <h3 align="center">README PRÁCTICA EJERCICIOS SASS </h3>

  <p align="center">
    Readme de los ejercicios sass
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica1-sass"><strong>Práctica 1 - SASS »</strong></a>
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica1-gulp"><strong>Práctica 1 - GULP »</strong></a>
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica2-webcomponent"><strong>Práctica 2 - WEB COMPONENTS »</strong></a>
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica3-gatsby"><strong>Práctica 3 - GATSBY »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC6/issues">Issues</a>
    ·
    <a href="https://github.com/alu0101102726/Practicas-SYTWC6/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#ejercicio2">Ejercicio 2</a></li>
    <li><a href="#ejercicio3">Ejercicio 3</a></li>
    <li><a href="#ejercicio4">Ejercicio 4</a></li>
    <li><a href="#ejercicio5">Ejercicio 5</a></li>
    <li><a href="#ejercicio6">Ejercicio 6</a></li>
    <li><a href="#ejercicio7">Ejercicio 7</a></li>
  </ol>
</details>

## Ejercicio 2
### Problema planteado:
```css
header {
    background-color: #531946;
  }
  .header a {
    color: #fff;
  }
  .header a:hover {
    color: #095169;
  }
  
  .footer {
    background-color: #30162B;
    color: #fff;
  }
  .footer a {
    color: #095169;
  }
  .footer a:hover {
    color: #fff;
  }
  
  .feature a {
    background-color: #30162B;
    color: #fff;
  }
  
  .feature a:hover {
    color: #531946;
  }
  
  .content {
    background-color: #fff;
    color: #222;
  }

```
### Solución propuesta:
```scss
  header {
    background-color: #531946;
  }
  
  .header a {
    color: #fff;
    &:hover {color: #095169;}
  }
  
  .footer {
    background-color: #30162B;
    color: #fff;
    
    a {
        color: #095169;
        &:hover{color: #fff;}
    }
  }
  
  .feature a {
    background-color: #30162B;
    color: #fff;
    &:hover {color: #531946;}
  }
  
  .content {
    background-color: #fff;
    color: #222;
  }
```

***

## Ejercicio 3
### Problema planteado:
```css
.header {
    background-color: #531946;
    border-radius: 5px;
    padding: 5px 20px;
  }
  .header a {
    color: #fff;
  }
  .header a:hover {
    color: #095169;
  }
  
  .footer {
    background-color: #30162B;
    color: #fff;
    border-radius: 5px;
    padding: 5px 20px;
  }
  .footer a {
    color: #095169;
  }
  .footer a:hover {
    color: #fff;
  }
  
  .feature a {
    background-color: #30162B;
    color: #fff;
    border-radius: 5px;
    padding: 5px 20px;
  }
  .feature a:hover {
    color: #531946;
  }
  
  .content {
    background-color: #fff;
    color: #222;
    border-radius: 5px;
    padding: 5px 20px;
  }
```
### Solución propuesta:
```scss
  .header {
    background-color: #531946;
    border-radius: 5px;
    padding: 5px 20px;
    
    a {
        color: #fff;
        &:hover {color: #095169;}
    }
  }
  
  .footer {
    background-color: #30162B;
    color: #fff;
    border-radius: 5px;
    padding: 5px 20px;
    a {
        color: #095169;
        &:hover {color: #fff;}
    }
  }
  
  .feature a {
    background-color: #30162B;
    color: #fff;
    border-radius: 5px;
    padding: 5px 20px;
    &:hover{color: #531946;}
  }
  
  .content {
    background-color: #fff;
    color: #222;
    border-radius: 5px;
    padding: 5px 20px;
  }
```

***

## Ejercicio 4
### Problema planteado:
```html
<nav class="navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```
```css
.navigation {
  float: right;
}
.navigation li {
  display: inline-block;
  list-style-type: none;
  margin-left: 1.5em;
}
.navigation a {
  display: block;
  text-decoration: none;
}
```
### Solución propuesta:
```scss
.navigation {
  float: right;
  
  li {
    display: inline-block;
    list-style-type: none;
    margin-left: 1.5em;
  }
  
  a {
    display: block;
    text-decoration: none;
  }
}
```

***

## Ejercicio 5
### Problema planteado:
```css
 a {
    color: #beedee;
  }
  
  a:hover {
    color: #cbbebb;
  }
  
  a.btn {
    background: #deede6;
  }
  
  a .btn {
    display: block;
  }
```
### Solución propuesta:
```scss
 a {
    color: #beedee;
    
    &:hover{color: #cbbebb;}
    
    btn {
        background: #deede6;
    }
    
    &.btn {
        display: block;
    }
  }
```

***

## Ejercicio 6
### Problema planteado:
```css
header {
    border-radius: 5px;
    padding: 5px 20px;
  }
  
  .footer {
    border-radius: 5px;
    padding: 5px 20px;
  }
  
  .feature a {
    border-radius: 5px;
    padding: 5px 20px;
  }
  
  .content {
    border-radius: 5px;
    padding: 5px 20px;

  }
```
### Solución propuesta:
```scss
 @mixin properties {
    border-radius: 5px;
    padding: 5px 20px;
 }
 
 @each $clase in header{
     #{$clase} {
        @include properties
     }
 } 
 
 @each $clase in footer, feature, content {
     .#{$clase} {
        @include properties
     }
 }
```

***

## Ejercicio 7
### Problema planteado:
```css
  .header {
    -webkit-border-radius: 5px;
       -moz-border-radius: 5px;
            border-radius: 5px;
    /* ... */
  }
  
  .footer {
    -webkit-border-radius: 10px;
       -moz-border-radius: 10px;
            border-radius: 10px;
    /* ... */
  }
```
### Solución propuesta:
```scss
 $incr: 0px;
  
 @each $clase in header, footer {
      .#{$clase} {
        -webkit-border-radius: 5px + $incr;
        -moz-border-radius:  5px + $incr;
        border-radius:  5px + $incr;
      }
    $incr: $incr + 5px; 
  }
```

***
