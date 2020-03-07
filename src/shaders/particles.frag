uniform float u_frequencyAvg;
uniform float u_hueRange;
uniform float u_hueStart;
uniform float u_time;
uniform sampler2D u_texture;

varying float v_frequency;
varying vec2 v_age;
varying float v_positionZ;


vec3 hsl2rgb(in vec3 c) { // credit anastadunbar @ shadertoy: https://www.shadertoy.com/view/XljGzV
	vec3 rgb = clamp(abs(mod(c.x * 6. + vec3(0.0, 4., 2.), 6.) - 3.) - 1., 0., 1.);

	return c.z + c.y * (rgb - .5) * (1. - abs(2. * c.z - 1.));
}

float fadeInOut(float t, float m) {
	float h = .5 * m;

	return abs(mod((t + h), m) - h) / h;
}

void main() {
	float alpha = fadeInOut(v_age.s, v_age.t);

	float saturation = .6 + (.4 * v_frequency);
	float luminosity = .2 + (.6 * u_frequencyAvg);

	float hue = fract(-u_hueStart + u_hueRange - (u_hueRange * v_frequency) + (u_time * .0005));

	vec4 color = vec4(hsl2rgb(vec3(hue, saturation, luminosity)), alpha);
	
	gl_FragColor = color * texture2D(u_texture, gl_PointCoord);
}
