<?php

	require_once "abrakadabra.php";
	require_once "security.php";
	
	
	if(isset($_POST['password']) && isset($_POST["folder_name"]) && isset($_POST["img0"]))
	{
		$pswd = $_POST['password'];
		
		if(getCurrentRightPassword($pswd )) 
		{
			
			$folder_name = $_POST['folder_name'];
			if(folder_exist("../images/".$folder_name)===false)
			{
				 mkdir("../images/".$folder_name, 0777);
			}
			
			$val = $_POST["img0"];
			// baseFromJavascript will be the javascript base64 string retrieved of some way (async or post submited)
			$baseFromJavascript = $val; //"data:image/png;base64,BBBFBfj42Pj4"; // $_POST['base64']; //your data in base64 'data:image/png....';
			// We need to remove the "data:image/png;base64,"
			$base_to_php = explode(',', $baseFromJavascript);
			// the 2nd item in the base_to_php array contains the content of the image
			$data = base64_decode($base_to_php[1]);
			// here you can detect if type is png or jpg if you want
			
			$key = "f_".time()."_".getAbrakadabra(10);
			//$folder_num = time();
			//time()
			$filepath = "../images/".$folder_name."/".$key.".png"; // or image.jpg
			
			// Save the image in a defined path
			file_put_contents($filepath,$data);
			
			$file = '../jar/dov_patterns_gifmaker.jar';
			$newfile = '../images/'.$folder_name.'/dov_patterns_gifmaker.jar';

			if (!copy($file, $newfile)) {
				echo "save_image_on_server.php::error:: $file";
			}
			else
			{
				$file = '../bat/dov_patterns_gifmaker.bat';
				$newfile = '../images/'.$folder_name.'/dov_patterns_gifmaker.bat';

				if (!copy($file, $newfile)) {
					echo "save_image_on_server.php::error:: $file";
				}
				else
				{
					echo "$key.png";
				}
			}
			

		}
		else
		{
			echo "save_image_on_server.php::error::password error";
			die("");
		}
	}
	else 
	{ 
		echo "save_image_on_server.php::error::password error";
		die("");
	}
?>