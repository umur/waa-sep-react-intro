package edu.miu.lab7service.controller;


import edu.miu.lab7service.entity.User;
import edu.miu.lab7service.model.LoginRequest;
import edu.miu.lab7service.model.LoginResponse;
import edu.miu.lab7service.model.RefreshTokenRequest;
import edu.miu.lab7service.service.UaaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/uaa")
@RequiredArgsConstructor
@CrossOrigin
public class UaaController {

    private final UaaService uaaService;


    @PostMapping
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        return uaaService.login(loginRequest);
    }

    @PostMapping("/sign-up")
    public LoginResponse register(@RequestBody User user) {
        return uaaService.register(user);
    }

    @PostMapping("/refresh-token")
    public LoginResponse refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest){
        return uaaService.refreshToken(refreshTokenRequest);
    }
}
