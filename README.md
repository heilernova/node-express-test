# API con express y TypeScript

Iniciamos la configuracions de node por defecto
```
npm init -y
```

## Dependencias necesarios

### TypeScript
Instalamos typescript como dependencia de desarrollo
```
npm i typescript -D
```
Agregamos el script de tsc de typescript en los scrtip del pakege.json
```
"scripts": {
    "tsc": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

```
npm run tsc -- --init
```

### Express js
Instalamos express y sus tipos paras typescript
```
npm i express
```
Tipos para typescrip
```
npm i @types/express -D
```