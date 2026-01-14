import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <form action="/action_page.php">
  <label for="fname"><br>Keresztnév:</label><br>

  <input type="text" id="fname" name="fname" value="Keresztnév"><br><br>

  <label for="lname">Vezetéknév:</label><br>
  <input type="text" id="lname" name="lname" value="Vezetéknév"><br><br>

  <label for="email">E-Mail:</label><br>

  <input type="text" id="email" name="email" value="email@example.com"><br><br>
  <input type="submit" value="Beadás">
</form> 
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
