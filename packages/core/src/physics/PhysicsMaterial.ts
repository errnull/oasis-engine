import { IPhysicsMaterial } from "@oasis-engine/design";
import { PhysicsManager } from "./PhysicsManager";
import { PhysicsMaterialCombineMode } from "./enums/PhysicsMaterialCombineMode";

/**
 * Material class to represent a set of surface properties.
 */
export class PhysicsMaterial {
  private _bounciness: number = 0.1;
  private _dynamicFriction: number = 0.1;
  private _staticFriction: number = 0.1;
  private _bounceCombine: PhysicsMaterialCombineMode = PhysicsMaterialCombineMode.Average;
  private _frictionCombine: PhysicsMaterialCombineMode = PhysicsMaterialCombineMode.Average;

  /** @internal */
  _nativeMaterial: IPhysicsMaterial;

  constructor() {
    this._nativeMaterial = PhysicsManager._nativePhysics.createPhysicsMaterial(
      this._staticFriction,
      this._dynamicFriction,
      this._bounciness,
      this._bounceCombine,
      this._frictionCombine
    );
  }

  /**
   * The coefficient of bounciness.
   */
  get bounciness(): number {
    return this._bounciness;
  }

  set bounciness(value: number) {
    if (this._bounciness !== value) {
      this._bounciness = value;
      this._nativeMaterial.setBounciness(value);
    }
  }

  /**
   * The DynamicFriction value.
   */
  get dynamicFriction(): number {
    return this._dynamicFriction;
  }

  set dynamicFriction(value: number) {
    if (this._dynamicFriction !== value) {
      this._dynamicFriction = value;
      this._nativeMaterial.setDynamicFriction(value);
    }
  }

  /**
   * The coefficient of static friction.
   */
  get staticFriction(): number {
    return this._staticFriction;
  }

  set staticFriction(value: number) {
    if (this._staticFriction !== value) {
      this._staticFriction = value;
      this._nativeMaterial.setStaticFriction(value);
    }
  }

  /**
   * The restitution combine mode.
   */
  get bounceCombine(): PhysicsMaterialCombineMode {
    return this._bounceCombine;
  }

  set bounceCombine(value: PhysicsMaterialCombineMode) {
    if (this._bounceCombine !== value) {
      this._bounceCombine = value;
      this._nativeMaterial.setBounceCombine(value);
    }
  }

  /**
   * The friction combine mode.
   */
  get frictionCombine(): PhysicsMaterialCombineMode {
    return this._frictionCombine;
  }

  set frictionCombine(value: PhysicsMaterialCombineMode) {
    if (this._frictionCombine !== value) {
      this._frictionCombine = value;
      this._nativeMaterial.setFrictionCombine(value);
    }
  }

  /**
   * @internal
   */
  _destroy() {
    this._nativeMaterial.destroy();
  }
}
