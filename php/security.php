<?php

/**
	 * Checks if a folder exist and return canonicalized absolute pathname (long version)
	 * @param string $folder the path being checked.
	 * @return mixed returns the canonicalized absolute pathname on success otherwise FALSE is returned
	 */
	function folder_exist($folder)
	{
		// Get canonicalized absolute pathname
		$path = realpath($folder);

		// If it exist, check if it's a directory
		if($path !== false AND is_dir($path))
		{
			// Return canonicalized absolute pathname
			// return $path;
			return true;
		}

		// Path/folder does not exist
		return false;
	}

	function getCurrentRightPassword($pswd)
	{
		$arr = explode(";",file_get_contents("../data/.passwords"));
		for($i=0;$i<count($arr);$i++)
			if(strcmp($arr[$i],$pswd)===0) return true;
		return false;
	}










?>