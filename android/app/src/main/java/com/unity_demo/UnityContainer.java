package com.unity_demo;

import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.unity3d.player.UnityPlayerActivity;

public class UnityContainer extends ReactContextBaseJavaModule {


    public UnityContainer(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * @return the name of this module. This will be the name used to {@code require()} this module
     * from javascript.
     */
    @NonNull
    @Override
    public String getName() {
        return "UnityContainer";
    }

    @ReactMethod
    void createEvent() {
        try {
            ReactApplicationContext context = getReactApplicationContext();
            Intent intent = new Intent(context, UnityPlayerActivity.class);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(intent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
