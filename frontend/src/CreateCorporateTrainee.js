import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const CreateCorporateTrainee = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [country, setCountry] = React.useState("");

  function Submit() {
    axios
      .post(
        "http://localhost:3000/addingCorpTrainee",
        {
          username: username,
          password: password,
          country: country,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
    console.log(country);
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2} direction={"column"}>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-basic"
          label=" corporate Trainee's username"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic"
          label="corporate Trainee's password"
          variant="outlined"
        />
        <InputLabel id="demo-simple-select-filled-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={country}
          label="Country"
          onChange={(e) => setCountry(e.target.value)}
        >
          <MenuItem value="Afghanistan">Afghanistan</MenuItem>
          <MenuItem value="Albania">Albania</MenuItem>
          <MenuItem value="Algeria">Algeria</MenuItem>
          <MenuItem value="American Samoa">American Samoa</MenuItem>
          <MenuItem value="Andorra">Andorra</MenuItem>
          <MenuItem value="Angola">Angola</MenuItem>
          <MenuItem value="Anguilla">Anguilla</MenuItem>
          <MenuItem value="Antartica">Antarctica</MenuItem>
          <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
          <MenuItem value="Argentina">Argentina</MenuItem>
          <MenuItem value="Armenia">Armenia</MenuItem>
          <MenuItem value="Aruba">Aruba</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
          <MenuItem value="Austria">Austria</MenuItem>
          <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
          <MenuItem value="Bahamas">Bahamas</MenuItem>
          <MenuItem value="Bahrain">Bahrain</MenuItem>
          <MenuItem value="Bangladesh">Bangladesh</MenuItem>
          <MenuItem value="Barbados">Barbados</MenuItem>
          <MenuItem value="Belarus">Belarus</MenuItem>
          <MenuItem value="Belgium">Belgium</MenuItem>
          <MenuItem value="Belize">Belize</MenuItem>
          <MenuItem value="Benin">Benin</MenuItem>
          <MenuItem value="Bermuda">Bermuda</MenuItem>
          <MenuItem value="Bhutan">Bhutan</MenuItem>
          <MenuItem value="Bolivia">Bolivia</MenuItem>
          <MenuItem value="Bosnia and Herzegowina">
            Bosnia and Herzegowina
          </MenuItem>
          <MenuItem value="Botswana">Botswana</MenuItem>
          <MenuItem value="Bouvet Island">Bouvet Island</MenuItem>
          <MenuItem value="Brazil">Brazil</MenuItem>
          <MenuItem value="British Indian Ocean Territory">
            British Indian Ocean Territory
          </MenuItem>
          <MenuItem value="Brunei Darussalam">Brunei Darussalam</MenuItem>
          <MenuItem value="Bulgaria">Bulgaria</MenuItem>
          <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
          <MenuItem value="Burundi">Burundi</MenuItem>
          <MenuItem value="Cambodia">Cambodia</MenuItem>
          <MenuItem value="Cameroon">Cameroon</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="Cape Verde">Cape Verde</MenuItem>
          <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>
          <MenuItem value="Central African Republic">
            Central African Republic
          </MenuItem>
          <MenuItem value="Chad">Chad</MenuItem>
          <MenuItem value="Chile">Chile</MenuItem>
          <MenuItem value="China">China</MenuItem>
          <MenuItem value="Christmas Island">Christmas Island</MenuItem>
          <MenuItem value="Cocos Islands">Cocos (Keeling) Islands</MenuItem>
          <MenuItem value="Colombia">Colombia</MenuItem>
          <MenuItem value="Comoros">Comoros</MenuItem>
          <MenuItem value="Congo">Congo</MenuItem>
          <MenuItem value="Congo">
            Congo, the Democratic Republic of the
          </MenuItem>
          <MenuItem value="Cook Islands">Cook Islands</MenuItem>
          <MenuItem value="Costa Rica">Costa Rica</MenuItem>
          <MenuItem value="Cota D'Ivoire">Cote d'Ivoire</MenuItem>
          <MenuItem value="Croatia">Croatia (Hrvatska)</MenuItem>
          <MenuItem value="Cuba">Cuba</MenuItem>
          <MenuItem value="Cyprus">Cyprus</MenuItem>
          <MenuItem value="Czech Republic">Czech Republic</MenuItem>
          <MenuItem value="Denmark">Denmark</MenuItem>
          <MenuItem value="Djibouti">Djibouti</MenuItem>
          <MenuItem value="Dominica">Dominica</MenuItem>
          <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
          <MenuItem value="East Timor">East Timor</MenuItem>
          <MenuItem value="Ecuador">Ecuador</MenuItem>
          <MenuItem value="Egypt">Egypt</MenuItem>
          <MenuItem value="El Salvador">El Salvador</MenuItem>
          <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
          <MenuItem value="Eritrea">Eritrea</MenuItem>
          <MenuItem value="Estonia">Estonia</MenuItem>
          <MenuItem value="Ethiopia">Ethiopia</MenuItem>
          <MenuItem value="Falkland Islands">
            Falkland Islands (Malvinas)
          </MenuItem>
          <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>
          <MenuItem value="Fiji">Fiji</MenuItem>
          <MenuItem value="Finland">Finland</MenuItem>
          <MenuItem value="France">France</MenuItem>
          <MenuItem value="France Metropolitan">France, Metropolitan</MenuItem>
          <MenuItem value="French Guiana">French Guiana</MenuItem>
          <MenuItem value="French Polynesia">French Polynesia</MenuItem>
          <MenuItem value="French Southern Territories">
            French Southern Territories
          </MenuItem>
          <MenuItem value="Gabon">Gabon</MenuItem>
          <MenuItem value="Gambia">Gambia</MenuItem>
          <MenuItem value="Georgia">Georgia</MenuItem>
          <MenuItem value="Germany">Germany</MenuItem>
          <MenuItem value="Ghana">Ghana</MenuItem>
          <MenuItem value="Gibraltar">Gibraltar</MenuItem>
          <MenuItem value="Greece">Greece</MenuItem>
          <MenuItem value="Greenland">Greenland</MenuItem>
          <MenuItem value="Grenada">Grenada</MenuItem>
          <MenuItem value="Guadeloupe">Guadeloupe</MenuItem>
          <MenuItem value="Guam">Guam</MenuItem>
          <MenuItem value="Guatemala">Guatemala</MenuItem>
          <MenuItem value="Guinea">Guinea</MenuItem>
          <MenuItem value="Guinea-Bissau">Guinea-Bissau</MenuItem>
          <MenuItem value="Guyana">Guyana</MenuItem>
          <MenuItem value="Haiti">Haiti</MenuItem>
          <MenuItem value="Heard and McDonald Islands">
            Heard and Mc Donald Islands
          </MenuItem>
          <MenuItem value="Holy See">Holy See (Vatican City State)</MenuItem>
          <MenuItem value="Honduras">Honduras</MenuItem>
          <MenuItem value="Hong Kong">Hong Kong</MenuItem>
          <MenuItem value="Hungary">Hungary</MenuItem>
          <MenuItem value="Iceland">Iceland</MenuItem>
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="Indonesia">Indonesia</MenuItem>
          <MenuItem value="Iran">Iran (Islamic Republic of)</MenuItem>
          <MenuItem value="Iraq">Iraq</MenuItem>
          <MenuItem value="Ireland">Ireland</MenuItem>
          <MenuItem value="Italy">Italy</MenuItem>
          <MenuItem value="Jamaica">Jamaica</MenuItem>
          <MenuItem value="Japan">Japan</MenuItem>
          <MenuItem value="Jordan">Jordan</MenuItem>
          <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
          <MenuItem value="Kenya">Kenya</MenuItem>
          <MenuItem value="Kiribati">Kiribati</MenuItem>
          <MenuItem value="Democratic People's Republic of Korea">
            Korea, Democratic People's Republic of
          </MenuItem>
          <MenuItem value="Korea">Korea, Republic of</MenuItem>
          <MenuItem value="Kuwait">Kuwait</MenuItem>
          <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
          <MenuItem value="Lao">Lao People's Democratic Republic</MenuItem>
          <MenuItem value="Latvia">Latvia</MenuItem>
          <MenuItem value="Lebanon">Lebanon</MenuItem>
          <MenuItem value="Lesotho">Lesotho</MenuItem>
          <MenuItem value="Liberia">Liberia</MenuItem>
          <MenuItem value="Libyan Arab Jamahiriya">
            Libyan Arab Jamahiriya
          </MenuItem>
          <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
          <MenuItem value="Lithuania">Lithuania</MenuItem>
          <MenuItem value="Luxembourg">Luxembourg</MenuItem>
          <MenuItem value="Macau">Macau</MenuItem>
          <MenuItem value="Macedonia">
            Macedonia, The Former Yugoslav Republic of
          </MenuItem>
          <MenuItem value="Madagascar">Madagascar</MenuItem>
          <MenuItem value="Malawi">Malawi</MenuItem>
          <MenuItem value="Malaysia">Malaysia</MenuItem>
          <MenuItem value="Maldives">Maldives</MenuItem>
          <MenuItem value="Mali">Mali</MenuItem>
          <MenuItem value="Malta">Malta</MenuItem>
          <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
          <MenuItem value="Martinique">Martinique</MenuItem>
          <MenuItem value="Mauritania">Mauritania</MenuItem>
          <MenuItem value="Mauritius">Mauritius</MenuItem>
          <MenuItem value="Mayotte">Mayotte</MenuItem>
          <MenuItem value="Mexico">Mexico</MenuItem>
          <MenuItem value="Micronesia">
            Micronesia, Federated States of
          </MenuItem>
          <MenuItem value="Moldova">Moldova, Republic of</MenuItem>
          <MenuItem value="Monaco">Monaco</MenuItem>
          <MenuItem value="Mongolia">Mongolia</MenuItem>
          <MenuItem value="Montserrat">Montserrat</MenuItem>
          <MenuItem value="Morocco">Morocco</MenuItem>
          <MenuItem value="Mozambique">Mozambique</MenuItem>
          <MenuItem value="Myanmar">Myanmar</MenuItem>
          <MenuItem value="Namibia">Namibia</MenuItem>
          <MenuItem value="Nauru">Nauru</MenuItem>
          <MenuItem value="Nepal">Nepal</MenuItem>
          <MenuItem value="Netherlands">Netherlands</MenuItem>
          <MenuItem value="Netherlands Antilles">Netherlands Antilles</MenuItem>
          <MenuItem value="New Caledonia">New Caledonia</MenuItem>
          <MenuItem value="New Zealand">New Zealand</MenuItem>
          <MenuItem value="Nicaragua">Nicaragua</MenuItem>
          <MenuItem value="Niger">Niger</MenuItem>
          <MenuItem value="Nigeria">Nigeria</MenuItem>
          <MenuItem value="Niue">Niue</MenuItem>
          <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>
          <MenuItem value="Northern Mariana Islands">
            Northern Mariana Islands
          </MenuItem>
          <MenuItem value="Norway">Norway</MenuItem>
          <MenuItem value="Oman">Oman</MenuItem>
          <MenuItem value="Pakistan">Pakistan</MenuItem>
          <MenuItem value="Palau">Palau</MenuItem>
          <MenuItem value="Palestine">Palestine</MenuItem>
          <MenuItem value="Panama">Panama</MenuItem>
          <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
          <MenuItem value="Paraguay">Paraguay</MenuItem>
          <MenuItem value="Peru">Peru</MenuItem>
          <MenuItem value="Philippines">Philippines</MenuItem>
          <MenuItem value="Pitcairn">Pitcairn</MenuItem>
          <MenuItem value="Poland">Poland</MenuItem>
          <MenuItem value="Portugal">Portugal</MenuItem>
          <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
          <MenuItem value="Qatar">Qatar</MenuItem>
          <MenuItem value="Reunion">Reunion</MenuItem>
          <MenuItem value="Romania">Romania</MenuItem>
          <MenuItem value="Russia">Russian Federation</MenuItem>
          <MenuItem value="Rwanda">Rwanda</MenuItem>
          <MenuItem value="Saint Kitts and Nevis">
            Saint Kitts and Nevis
          </MenuItem>
          <MenuItem value="Saint LUCIA">Saint LUCIA</MenuItem>
          <MenuItem value="Saint Vincent">
            Saint Vincent and the Grenadines
          </MenuItem>
          <MenuItem value="Samoa">Samoa</MenuItem>
          <MenuItem value="San Marino">San Marino</MenuItem>
          <MenuItem value="Sao Tome and Principe">
            Sao Tome and Principe
          </MenuItem>
          <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
          <MenuItem value="Senegal">Senegal</MenuItem>
          <MenuItem value="Seychelles">Seychelles</MenuItem>
          <MenuItem value="Sierra">Sierra Leone</MenuItem>
          <MenuItem value="Singapore">Singapore</MenuItem>
          <MenuItem value="Slovakia">Slovakia (Slovak Republic)</MenuItem>
          <MenuItem value="Slovenia">Slovenia</MenuItem>
          <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
          <MenuItem value="Somalia">Somalia</MenuItem>
          <MenuItem value="South Africa">South Africa</MenuItem>
          <MenuItem value="South Georgia">
            South Georgia and the South Sandwich Islands
          </MenuItem>
          <MenuItem value="Span">Spain</MenuItem>
          <MenuItem value="SriLanka">Sri Lanka</MenuItem>
          <MenuItem value="St. Helena">St. Helena</MenuItem>
          <MenuItem value="St. Pierre and Miguelon">
            St. Pierre and Miquelon
          </MenuItem>
          <MenuItem value="Sudan">Sudan</MenuItem>
          <MenuItem value="Suriname">Suriname</MenuItem>
          <MenuItem value="Svalbard">Svalbard and Jan Mayen Islands</MenuItem>
          <MenuItem value="Swaziland">Swaziland</MenuItem>
          <MenuItem value="Sweden">Sweden</MenuItem>
          <MenuItem value="Switzerland">Switzerland</MenuItem>
          <MenuItem value="Syria">Syrian Arab Republic</MenuItem>
          <MenuItem value="Taiwan">Taiwan, Province of China</MenuItem>
          <MenuItem value="Tajikistan">Tajikistan</MenuItem>
          <MenuItem value="Tanzania">Tanzania, United Republic of</MenuItem>
          <MenuItem value="Thailand">Thailand</MenuItem>
          <MenuItem value="Togo">Togo</MenuItem>
          <MenuItem value="Tokelau">Tokelau</MenuItem>
          <MenuItem value="Tonga">Tonga</MenuItem>
          <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
          <MenuItem value="Tunisia">Tunisia</MenuItem>
          <MenuItem value="Turkey">Turkey</MenuItem>
          <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
          <MenuItem value="Turks and Caicos">Turks and Caicos Islands</MenuItem>
          <MenuItem value="Tuvalu">Tuvalu</MenuItem>
          <MenuItem value="Uganda">Uganda</MenuItem>
          <MenuItem value="Ukraine">Ukraine</MenuItem>
          <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
          <MenuItem value="United Kingdom">United Kingdom</MenuItem>
          <MenuItem value="United States">United States</MenuItem>
          <MenuItem value="United States Minor Outlying Islands">
            United States Minor Outlying Islands
          </MenuItem>
          <MenuItem value="Uruguay">Uruguay</MenuItem>
          <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
          <MenuItem value="Vanuatu">Vanuatu</MenuItem>
          <MenuItem value="Venezuela">Venezuela</MenuItem>
          <MenuItem value="Vietnam">Viet Nam</MenuItem>
          <MenuItem value="Virgin Islands (British)">
            Virgin Islands (British)
          </MenuItem>
          <MenuItem value="Virgin Islands (U.S)">
            Virgin Islands (U.S.)
          </MenuItem>
          <MenuItem value="Wallis and Futana Islands">
            Wallis and Futuna Islands
          </MenuItem>
          <MenuItem value="Western Sahara">Western Sahara</MenuItem>
          <MenuItem value="Yemen">Yemen</MenuItem>
          <MenuItem value="Serbia">Serbia</MenuItem>
          <MenuItem value="Zambia">Zambia</MenuItem>
          <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
        </Select>

        <Button onClick={Submit} variant="contained">
          Create corporate Trainee
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateCorporateTrainee;
