#define TAU 6.283185307179586
#define NUM_OCTAVES 6

float turbulence(vec4 st) {
	float value = 0.;
	float amp = 1.;

	for (int i = 0; i < NUM_OCTAVES; i++) {
		value += amp * abs(cnoise(st));
		st *= 2.;
		amp *= .5;
	}

	return value;
}

vec3 noiseVel(vec3 st, float time, float scale) {
	float _time = time * scale;
	float noise = cnoise(vec4(st, _time) * (.1 * scale));
	float theta = noise * TAU;
	float phi = theta * 2.;

	return vec3(sin(phi) * cos(theta),
							sin(phi) * sin(theta),
							cos(phi));
}
