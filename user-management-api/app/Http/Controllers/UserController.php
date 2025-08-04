<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
	public function index()
	{
		return response()->json(User::all());
	}

	public function store(Request $request)
	{
		$validated = $request->validate([
			'firstName' => 'required|string',
			'lastName' => 'required|string',
			'email' => 'required|email|unique:users'
		]);

		$user = User::create($validated);

		return response()->json($user, 200);
	}

	public function show($id)
	{
		$user = User::find($id);
		if (!$user) return response()->json(['error' => 'User not found'], 404);
		return response()->json($user);
	}

	public function update(Request $request, $id)
	{
		$user = User::find($id);
		if (!$user) return response()->json(['error' => 'User not found'], 404);

		$validated = $request->validate([
			'firstName' => 'string',
			'lastName' => 'string',
			'email' => 'email|unique:users,email,' . $id,
		]);

		$user->update($validated);
		return response()->json($user);
	}

	public function destroy($id)
	{
		$user = User::find($id);
		if (!$user) return response()->json(['error' => 'User not found'], 404);

		$user->delete();
		return response()->json(['message' => 'User deleted']);
	}
}
