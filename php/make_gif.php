<?php
//header ('Content-type:image/gif');
include('GIFEncoder.class.php');

require_once "security.php";


	if(isset($_POST['password']) && isset($_POST["folder_name"]) )
	{
		$pswd = $_POST['password'];
		
		if(getCurrentRightPassword($pswd )) 
		{
			
			$folder_name = $_POST['folder_name'];
			if(folder_exist("../images/".$folder_name)===false)
			{
				die("make_gif.php.php::error::folder error");
			}
			
			$path="../images/".$folder_name;
			$arr = scandir($path);
			if(count($arr)>0)
			{
				$i = 0;
				$filename = '';
				for($i=0;$i<count($arr);$i++)
				{
					//$i = rand(0, count($arr)-1);
					if( $arr[$i] == '..' || $arr[$i] == '.' ) { array_splice($arr,$i,1); $i= -1; continue;}
					$search='.png';
					if(strcmp(substr($arr[$i], strlen($arr[$i]) - strlen($search)), $search)!==0) { array_splice($arr,$i,1); $i= -1; continue;}
					//$filename = $arr[$i];
					
				}
				
			}
			error_reporting(0);
			$frequence=40;
			if(isset($_POST['frequence']))
			{
				$frequence=intval((''.$_POST['frequence']).trim())+1;
			}
			
			
			if(isset($_POST['author']))
			{
				$text = $_POST['author'];
			}
			else
			{
				$text = 'Created by @Anon';
			}
			
			for($i=0;$i<count($arr);$i++)
			{			
						

				// Open the $i source image and add the text.
				$image = imagecreatefrompng($path."/".$arr[$i]);
				$text_color = imagecolorallocate($image, 200, 200, 200);
				imagestring($image, 5, 5, 5,  $text, $text_color);

				// Generate GIF from the $image
				// We want to put the binary GIF data into an array to be used later,
				//  so we use the output buffer.
				ob_start();
				imagegif($image);
				$frames[]=ob_get_contents();
				$framed[]=$frequence;

				// Delay in the animation.
				ob_end_clean();
						
						
						
			}
			
			
				// Generate the animated gif and output to screen.
				$gif = new GIFEncoder($frames,$framed,0,2,0,0,0,'bin');

				//echo $gif->GetAnimation();
				$filename_for_gif = '../images/'.$folder_name.'/animation.gif';
				$fp = fopen($filename_for_gif, 'w');
				fwrite($fp, $gif->GetAnimation());
				fclose($fp);
				
				
				echo $folder_name;
			
			
		}
		else
		{
			echo "make_gif.php::error::password error";
			die("");
		}
	}
	else 
	{ 
		echo "make_gif.php.php::error::data error";
		die("");
	}





		// // And again..
		// // Open the first source image and add the text.
		// $image = imagecreatefrompng('source02.png');
		// $text_color = imagecolorallocate($image, 200, 200, 200);
		// imagestring($image, 5, 20, 20,  $text, $text_color);

		// // Generate GIF from the $image
		// // We want to put the binary GIF data into an array to be used later,
		 // // so we use the output buffer.
		// ob_start();
		// imagegif($image);
		// $frames[]=ob_get_contents();
		// $framed[]=40;

		// // Delay in the animation.
		// ob_end_clean();

	
		

?>