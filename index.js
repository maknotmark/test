/*async function callft() {	
	const response = await fetch('http://102ks04/dev/ft.php');
	const data = await response.json();
	return(data.working);
}
*/

/*
http://102ks04/dev/ft.php returns {"working":"yes"}
*/

let working = fetch('http://102ks04/dev/ft.php')
				.then((response) => response.json())
				.then((data) => {
					return data.working;
				});
				
if (working === 'yes') {
	console.log('at')
} else if (working === 'nope'){
	console.log('ft')
}else {
	console.log('not working')
};