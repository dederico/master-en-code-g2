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
  })

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

d3
  .select('body') // Select the body tag
  .select('h3') // Select the h3 tag
  .data(dataSet) // Set the data to the h3 tag
  .enter() // Create a new div tag inside the body tag
  .append('h3') // Append the h3 tag to the body tag
  .text((d) => {
    return ` Soy el valor ${d}`
  }) // Set the text to the h3 tag