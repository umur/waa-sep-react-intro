package edu.miu.lab7service.service;

import edu.miu.lab7service.entity.User;
import edu.miu.lab7service.model.LoginRequest;
import edu.miu.lab7service.model.LoginResponse;
import edu.miu.lab7service.model.RefreshTokenRequest;


public interface UaaService {

    LoginResponse login(LoginRequest loginRequest);

    LoginResponse register(User user);

    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
