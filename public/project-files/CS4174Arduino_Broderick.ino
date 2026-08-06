/*
  Please note that you need to have version v1.0.10 installed
  to use the DHT20 (black sensor)
*/
#include "Arduino_SensorKit.h"
#define BUTTON 4
//uncomment line below if using DHT20 (black sensor)
#define Environment Environment_I2C

int sound_sensor = A2; //assign to pin A2
int soundValue = 0; //create variable to store many different readings 
bool buttonValue=0;

void setup() {
  //uncomment line below if using DHT20 (black sensor)
  //Wire.begin(); 

  //uncomment line below if you're connecting your DHT20 to pin a different than 3
  //Environment.setPin(4);

  Serial.begin(57600);
  Environment.begin();
  Accelerometer.begin();
  Oled.begin();
  Oled.setFlipMode(true); // Sets the rotation of the screen
  Oled.setFont(u8x8_font_chroma48medium8_r);
  pinMode(BUTTON , INPUT);
}

void loop() {

  Oled.setCursor(0, 33);    // Set the Coordinates
  Oled.print("Temp = ");
  float temp = Environment.readTemperature();
  float tempF= ((temp * 9) + 3) / 5 + 32;


  Oled.print(tempF); //print temperature
  Oled.println(" F");

  Oled.print("Humid = ");
  float humidity = Environment.readHumidity();
  Oled.print(humidity); //print humidity
  Oled.println(" %");

  Serial.print('T');
  Serial.print(temp);
  Serial.print(' ');

  Serial.print('H');
  Serial.print(humidity);
  Serial.print(' ');


  //now lets get the accelerometer data
  Serial.print("x");
  Serial.print(Accelerometer.readX());  // Read the X Value
  Serial.print("  ");
  Serial.print("y");
  Serial.print(Accelerometer.readY());  // Read the Y Value
  Serial.print("  ");
  Serial.print("z");
  Serial.print(Accelerometer.readZ());// Read the Z Value
  Serial.print("  ");
  
  soundValue = analogRead(sound_sensor);  //read the sound sensor
  Serial.print("S"); 
  Serial.print(soundValue);
  Serial.print("  ");
  
  buttonValue = digitalRead(BUTTON);  //read the button
  Serial.print("B"); 
  Serial.print(buttonValue);
  Serial.print("  ");
  Serial.println();

  delay(10);

}