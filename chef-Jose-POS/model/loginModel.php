<?php

    require_once "../Connection/dbh.php";

    class Login extends Connection {

        public function getUser($username, $password) {
            $stmt = $this->connect()->prepare('SELECT * FROM admin WHERE username = ?;');
            
            if (!$stmt->execute(array($username))) {
                $stmt = null;
                header("Location: ../index.php?error=stmtfailed");
                exit();
            }

            if ($stmt->rowCount() == 0) {
                $stmt = null;
                header("Location: ../index.php?error=usernotfound");
                exit();
            }

            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            $stmt = null;

            if (!password_verify($password, $user['password'])) {
                header("Location: ../index.php?error=wrongpassword");
                exit();
            }

            session_start();
            $_SESSION["username"] = $user["username"];
            
            $stmt = null;
        }
    }
