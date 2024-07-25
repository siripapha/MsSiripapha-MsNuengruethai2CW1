<?php
namespace App\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController {
    private $usersFile;

    public function __construct() {
        $this->usersFile = require __DIR__ . '/../config.php')['users_file'];
    }

    private function loadUsers() {
        if (!file_exists($this->usersFile)) {
            return [];
        }
        $json = file_get_contents($this->usersFile);
        return json_decode($json, true);
    }

    private function saveUsers($users) {
        file_put_contents($this->usersFile, json_encode($users));
    }

    public function register(Request $request) {
        $users = $this->loadUsers();
        foreach ($users as $user) {
            if ($user['email'] === $request->email) {
                return response()->json(['error' => 'Email already exists'], 422);
            }
        }

        $user = new User($request->name, $request->email, password_hash($request->password, PASSWORD_BCRYPT));
        $users[] = (array)$user;
        $this->saveUsers($users);

        return response()->json(['message' => 'User registered successfully']);
    }

    public function login(Request $request) {
        $users = $this->loadUsers();
        foreach ($users as $user) {
            if ($user['email'] === $request->email && password_verify($request->password, $user['password'])) {
                return response()->json(['message' => 'Login successful']);
            }
        }
        return response()->json(['error' => 'Invalid credentials'], 401);
    }

    public function logout(Request $request) {
        return response()->json(['message' => 'Successfully logged out']);
    }
}
