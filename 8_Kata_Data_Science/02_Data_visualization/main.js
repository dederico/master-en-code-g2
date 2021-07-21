// alert('hola mundo')

// console.log('Biblioteca de D3:', d3)

// Verificamos que D3 se esta importando corretamente

// const [body] = document.getElementsByTagName('body');
// console.log(body);
// body.style.backgroundColor = 'orange';

// Asi es como se cambiaria el color de fondo con js vanilla

// d3.select('body').style('background-color', 'orange');

d3
  .select('body')
  .style('background-color', (algo) => {
  console.log(algo);
  return 'salmon'
  });

// d3.selectAll('p')
//   .style('color', 'white')
  
d3.
  selectAll('p')
  .style('color', () => {
    return 'white'
  });

// d3
//   .selectAll('p')
//   .style('border', () => {
//     return '1px solid black'
//   })
//   .style("color", () => {
//     return "hsl(" + Math.random() * 360 + ", 100%, 50%)"
//   });

// create a constant named dataSet that have random numbers

const dataSet = [3, 9, 20, 88, 77, 40];

// d3.
//   selectAll('p')
//   .data(dataSet)
//   .style('font-size', (d) => {
//     return `${d}px`
//   })

// d3
//   .select('body') // Select the body tag
//   .select('h3') // Select the h3 tag
//   .data(dataSet) // Set the data to the h3 tag
//   .enter() // Create a new div tag inside the body tag
//   .append('h3') // Append the h3 tag to the body tag
//   .text((d) => {
//     return ` Soy el valor ${d}`
//   }) // Set the text to the h3 tag

//   // RETO
  // Partiendo del siguiente arreglo de paises
  // 
  //  const paises = [
  //    {nombre : 'mexico', porcentaje : '875', color : 'green'},
  //    {nombre : 'colombia', porcentaje : '763', color : 'yellow'},
  //    {nombre : 'venezuela', porcentaje : '663', color : 'red'},
  //    {nombre : 'peru', porcentaje : '913', color : 'blue'}
  //  ];
  //
//  Genera una grafica de barras que muestre, cada barra del color que 
//  tiene cada objeto, y dentro de cada barra debe mostrarse un texto como el siguiente:
//    ‘bolivia 663%’
//    ‘colombia 763%’

// d3.
//   selectAll('p')
//   .data(paises)
//   .enter()
//   .append('p')
//   .text((d) => {
//     return `${d.nombre} ${d.porcentaje}%`
//   })

// var svg =
//   d3
//     .select('body')
//     .attr('width', '500px')
//     .attr('height', '500px');

// svg
//   .selectAll("g")
//   .data(paises)
//   .enter()
//   .append("g")




// var paises = [30,40,50,60]
// var span = 900, ceil = 500;
// var scalespan = d3
// .scaleLinear()
// .domain([0, d3.max(paises)])
// .range([0, 400]);
// var screen = d3.select("body").append("svg")
// .attr("width", span)
// .attr("height", ceil)
// .append("g").attr("transform", "translate(5,20)");
// var rule = screen.selectAll("rect")
// .data(paises).enter()
// .append("rect")
//   .attr("width",
//     function (d) {
//       return scalespan(d);
//     })
// .attr("height", 20)
// .attr("y", function(d, i){ return i*25; })
// .attr("fill", "black"); 

// screen.selectAll("text")
// .data(paises).enter().append("text")
// .attr("y", function(d, i){ return i*25; })
// .attr("x", function(d){ return scalespan(d);})
// .text(function(d) {return d;})
// .attr("fill", "white").attr("dy",".85em").attr("padding-right", "-100px");
  
const paises = [{ nombre: 'mexico', porcentaje: '87', color: 'green' },
{ nombre: 'colombia', porcentaje: '76', color: 'yellow' },
{ nombre: 'venezuela', porcentaje: '66', color: 'red' },
  { nombre: 'peru', porcentaje: '91', color: 'blue' }];

d3
  .select('body')
  .selectAll('div')
  .data(paises)
  .enter()
  .append('div')
  .style('height', '40px')
  .style('background', (data) => {
    return data.color
  })
  .style('margin-bottom', '10px')
  .style('width', (data) => {
    return `${data.porcentaje}px`
  })
  .text((pais) => {
    return `${pais.nombre} ${pais.porcentaje}%`
  })